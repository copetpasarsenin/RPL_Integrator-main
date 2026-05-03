# ATURAN PENGERJAAN — API GATEWAY / INTEGRATOR
**Skema Tugas Besar Mata Kuliah RPL 2**
Dosen: M. Yusril Helmi Setyawan, S.Kom., M.Kom.

---

Berikut adalah aturan pengerjaan ekosistem yang berdampak langsung pada peran API Gateway / Integrator:

| No | Aturan Utama | Deskripsi | Implikasi ke Pengerjaan (Gateway) |
|---|---|---|---|
| 1 | **Wajib melalui API Gateway** | Semua komunikasi antar aplikasi harus melalui gateway. | Menjamin keamanan dan konsistensi sistem. Gateway harus siap me-routing (misal: Marketplace → Gateway → SmartBank). |
| 2 | **Validasi & Logging Wajib** | Setiap request harus divalidasi dan dicatat. | Gateway wajib mengimplementasikan middleware JWT validation dan logging request. |
| 3 | **Alur = Input → Proses → Output** | Semua fitur harus mengikuti pola IPO. | Saat membangun API, mahasiswa harus berpikir sistematis (Input: request → Proses: validasi/routing → Output: response/forward). |
| 4 | **Setiap endpoint = kontrak sistem** | Endpoint API harus jelas dan konsisten. | Harus mendefinisikan API contract yang disepakati oleh aplikasi lain yang menggunakan Gateway. |