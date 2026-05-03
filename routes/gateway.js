const express = require('express');
const router = express.Router();
const axios = require('axios');

const SERVICE_FEE = 500; // Sesuai Aturan 9: Semua layanan berbayar

// Middleware untuk Simulasi Pencatatan Fee Gateway 0.5% [Fitur 4 & Aturan 6 Keuangan]
const simulateGatewayFee = (req, res, next) => {
    // Mendeteksi nominal transaksi (biasanya pada POST/PUT body dengan parameter amount, nominal, dll)
    const transactionAmount = req.body?.amount || req.body?.nominal || req.body?.total || 0;
    
    // Menghitung fee 0.5%
    const percentageFee = transactionAmount * 0.005;
    
    if (transactionAmount > 0) {
        console.log(`[Fee System] Fee Gateway 0.5% dicatat untuk request ini. Nilai Transaksi: Rp${transactionAmount} | Fee: Rp${percentageFee}`);
    } else {
        console.log(`[Fee System] Fee Gateway 0.5% dicatat untuk request ini.`);
    }

    // Menyimpan fee ke dalam request untuk dilampirkan pada response
    req.gatewayFee = percentageFee;
    next();
};

// Terapkan middleware ke semua request yang masuk ke router ini
router.use(simulateGatewayFee);

// Gunakan syntax routing yang kompatibel dengan Express 5 (path-to-regexp)
router.all(['/:service', '/:service/*subPath'], async (req, res) => {
    const { service } = req.params;
    
    // Express 5 menempatkan tangkapan regex di req.params.subPath
    const subPath = req.params.subPath || '';
    
    // Ambil query string jika ada
    const queryString = Object.keys(req.query).length > 0 ? req.url.substring(req.url.indexOf('?')) : '';

    let targetUrl = "";

    // Mapping Service [Fitur 1]
    // Contoh simulasi URL service tujuan jika environment variable belum diatur
    if (service === 'smartbank') {
        targetUrl = process.env.SMARTBANK_URL || 'http://localhost:4001';
    } else if (service === 'marketplace') {
        targetUrl = process.env.MARKETPLACE_URL || 'http://localhost:4002';
    } else if (service === 'akademik') {
        targetUrl = process.env.AKADEMIK_URL || 'http://localhost:4003';
    }

    if (!targetUrl) return res.status(404).json({ message: 'Service tujuan tidak terdaftar di API Gateway' });

    try {
        // Integrasi Pembayaran Fee ke SmartBank [Fitur 4 & Aturan 3]
        if (process.env.SMARTBANK_URL) {
            await axios.post(`${process.env.SMARTBANK_URL}/smartbank/pembayaran_transaksi`, {
                user_id: req.body.user_id || "system",
                amount: SERVICE_FEE,
                parameter: "Biaya Layanan Integrasi"
            }).catch(() => console.log("Gagal potong fee, SmartBank offline."));
        }

        // Menyusun URL lengkap untuk di-forward
        const forwardUrl = subPath ? `${targetUrl}/${subPath}${queryString}` : `${targetUrl}${queryString}`;

        // Forwarding Request menggunakan axios
        const axiosConfig = {
            method: req.method,
            url: forwardUrl,
            headers: { ...req.headers }
        };
        
        // Hapus header host agar tidak terjadi konflik host saat axios melakukan request
        delete axiosConfig.headers.host;

        // Sertakan body request jika method mendukung payload
        if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
            axiosConfig.data = req.body;
        }

        const response = await axios(axiosConfig);

        // Kembalikan response dari service tujuan ke client
        res.status(response.status).json({
            status: "Success",
            integrator_info: { 
                fee_terpotong_tetap: SERVICE_FEE,
                fee_persentase_0_5_persen: req.gatewayFee,
                forwarded_to: forwardUrl
            },
            data: response.data
        });

    } catch (error) {
        if (error.response) {
            // Teruskan response error (4xx, 5xx) dari service tujuan
            return res.status(error.response.status).json(error.response.data);
        }
        res.status(500).json({ status: "Error", message: "Gagal meneruskan request ke service tujuan" });
    }
});

module.exports = router;