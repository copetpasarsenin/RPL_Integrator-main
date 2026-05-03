# DOKUMEN FUNGSIONAL — API GATEWAY / INTEGRATOR
**Skema Tugas Besar Mata Kuliah RPL 2**
Dosen: M. Yusril Helmi Setyawan, S.Kom., M.Kom.

---

### 1. Fitur: Routing API
* **Deskripsi:** Routing request antar service.
* **Input Utama:** `user_id`, parameter terkait fitur 'Routing API'.
* **Proses Sistem:** Validasi input → proses 'Routing API' → jika transaksi integrasi SmartBank → simpan hasil.
* **Output Utama:** status + data hasil 'Routing API'.
* **Endpoint API:** `/integrator/routing_api`
* **Spesifikasi / Desain Teknis:**
  - Buat fitur 'Routing API' pada aplikasi Integrator.
  - Gunakan REST API.
  - Ketentuan: Gunakan MVC / Clean Code, Validasi semua input, Jika transaksi → wajib integrasi SmartBank, Gunakan JSON.

### 2. Fitur: Validasi Request
* **Deskripsi:** Validasi token.
* **Input Utama:** `user_id`, parameter terkait fitur 'Validasi request'.
* **Proses Sistem:** Validasi input → proses 'Validasi request' → jika transaksi integrasi SmartBank → simpan hasil.
* **Output Utama:** status + data hasil 'Validasi request'.
* **Endpoint API:** `/integrator/validasi_request`
* **Spesifikasi / Desain Teknis:**
  - Buat fitur 'Validasi request' pada aplikasi Integrator.
  - Gunakan REST API.
  - Ketentuan: Gunakan MVC / Clean Code, Validasi semua input, Jika transaksi → wajib integrasi SmartBank, Gunakan JSON.

### 3. Fitur: Logging
* **Deskripsi:** Mencatat request.
* **Input Utama:** `user_id`, parameter terkait fitur 'Logging'.
* **Proses Sistem:** Validasi input → proses 'Logging' → jika transaksi integrasi SmartBank → simpan hasil.
* **Output Utama:** status + data hasil 'Logging'.
* **Endpoint API:** `/integrator/logging`
* **Spesifikasi / Desain Teknis:**
  - Buat fitur 'Logging' pada aplikasi Integrator.
  - Gunakan REST API.
  - Ketentuan: Gunakan MVC / Clean Code, Validasi semua input, Jika transaksi → wajib integrasi SmartBank, Gunakan JSON.

### 4. Fitur: Biaya Layanan Integrasi
* **Deskripsi:** Biaya service per request antar aplikasi.
* **Input Utama:** `user_id`, parameter terkait fitur 'Biaya layanan integrasi'.
* **Proses Sistem:** Validasi input → proses 'Biaya layanan integrasi' → jika transaksi integrasi SmartBank → simpan hasil.
* **Output Utama:** status + data hasil 'Biaya layanan integrasi'.
* **Endpoint API:** `/integrator/biaya_layanan_integrasi`
* **Spesifikasi / Desain Teknis:**
  - Buat fitur 'Biaya layanan integrasi' pada aplikasi Integrator.
  - Gunakan REST API.
  - Ketentuan: Gunakan MVC / Clean Code, Validasi semua input, Jika transaksi → wajib integrasi SmartBank, Gunakan JSON.