# DESKRIPSI APLIKASI — API GATEWAY / INTEGRATOR
**Skema Tugas Besar Mata Kuliah RPL 2**
Dosen: M. Yusril Helmi Setyawan, S.Kom., M.Kom.

---

| Field | Detail |
|---|---|
| **Kelompok** | 7 |
| **Nama Aplikasi** | API Gateway / Integrator |
| **Deskripsi Naratif** | API Gateway menjadi pintu masuk semua request antar aplikasi. Bertanggung jawab untuk routing, validasi token (JWT), logging, dan standarisasi komunikasi. |
| **Peran dalam Ekosistem** | Middleware/orchestrator; penjaga keamanan dan konsistensi. |
| **Tanggung Jawab Utama** | Routing API; validasi JWT; logging; rate limiting (opsional). |
| **Input Utama** | request dari aplikasi |
| **Output Utama** | request ter-forward / response |
| **Interaksi Antar Aplikasi** | Semua aplikasi wajib melalui Gateway untuk komunikasi. |
| **Batasan Scope** | Tidak memproses bisnis logic transaksi. |
| **Contoh Use Case** | Forward POST /payment dari Marketplace ke SmartBank. |