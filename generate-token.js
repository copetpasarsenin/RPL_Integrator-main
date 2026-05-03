require('dotenv').config(); // Wajib agar bisa membaca file .env
const jwt = require('jsonwebtoken');

// Mengambil secret key dari .env
const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
    console.error("❌ ERROR: JWT_SECRET tidak ditemukan di file .env!");
    process.exit(1);
}

const payload = {
    user_id: "714240061", // Sesuai dengan data test kamu
    role: "client_app"
};

// Generate token yang berlaku selama 1 jam
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log("\n=== COPY TOKEN DI BAWAH INI (DARI eyJ SAMPAI HABIS) ===");
console.log(token);
console.log("========================================================\n");