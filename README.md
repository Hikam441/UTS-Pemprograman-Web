# Dokumentasi Halaman Web: RS NU Kedungwuni

Dokumen ini menjelaskan struktur, *styling*, dan fungsionalitas dari file tunggal `index.html` yang membangun *landing page* **Rumah Sakit NU Kedungwuni**.

## 1. Ikhtisar Proyek

| Kategori | Detail |
| :--- | :--- |
| **Nama Halaman** | **RS NU Kedungwuni** - Pelayanan Kesehatan Terpercaya |
| **Tujuan** | *Landing page* modern untuk menampilkan layanan, tim dokter, blog, dan informasi kontak rumah sakit. |
| **Teknologi** | HTML5, CSS3 (Internal Styles), Vanilla JavaScript (Internal Scripting) |
| **Ketergantungan** | Font Awesome (CDN) untuk semua ikon. |
| **Identitas Korporat** | Semua rujukan nama telah diperbarui menjadi **RS NU Kedungwuni** (termasuk `<title>` dan *logo*). |

***

## 2. Struktur Dasar (HTML)

Struktur HTML menggunakan tata letak semantik HTML5 dengan elemen kunci yang diperbarui:

### 2.1. Navbar (`.navbar`)

* **Logo/Nama:** Teks logo telah diganti menjadi **`RS NU Kedungwuni`**.
* **Efek Scroll:** Menggunakan JavaScript untuk menambahkan kelas `.scrolled` saat menggulir.

### 2.2. Hero Section (`#home`)

* Teks Utama pada Carousel telah diperbarui: "Selamat Datang di **RS NU Kedungwuni**".
* Fungsionalitas *Carousel* (slider otomatis dan navigasi dot) dikelola oleh JavaScript.

### 2.3. Bagian Konten (`id` Utama)

Semua konten teks yang merujuk pada nama rumah sakit (misalnya di bagian "Tentang") telah diperbarui menjadi **RS NU Kedungwuni**.

| ID Section | Isi Teks yang Diperbarui |
| :--- | :--- |
| `#about` | Teks pendahuluan diubah: "**RS NU Kedungwuni** telah melayani masyarakat selama..." |
| `#testimonial` | Konten testimonial merujuk pada pengalaman di **RS NU Kedungwuni**. |
| `<footer>` | Hak Cipta diubah: "© 2024 **RS NU Kedungwuni**. Hak Cipta Dilindungi Undang-Undang." |

***

## 3. Desain dan Gaya (CSS)

Secara umum, *styling* tetap menggunakan skema warna Biru (`--primary`) dan Hijau (`--secondary`) yang digunakan sebagai warna dasar.

### 3.1. Gaya Khusus Tim Dokter (`#team`)

Bagian ini penting karena telah dimodifikasi untuk menampung gambar dokter dan ikon media sosial.

* **`.team-avatar`:** Digunakan sebagai *container* untuk gambar dokter, menerapkan:
    * **Bentuk Lingkaran** (`border-radius: 50%`) dan ukuran 120x120px.
    * **`overflow: hidden;`** untuk memotong gambar sesuai lingkaran.
* **`.team-avatar img`:** Gambar di dalamnya dipaksa mengisi penuh *container* lingkaran dengan `object-fit: cover`.
* **Ikon Instagram (`.social-icon-sm`):**
    * Ikon media sosial (`<i class="fab fa-instagram"></i>`) ditambahkan setelah peran dokter.
    * Diberi gaya lingkaran kecil (35x35px) dengan efek *hover* yang mengangkat ikon (`transform: translateY(-3px)`).

***

## 4. Fungsionalitas (JavaScript)

Kode JavaScript sepenuhnya bersifat *boilerplate* dan tidak memiliki dependensi nama rumah sakit, sehingga **semua fungsionalitas tetap bekerja normal** setelah penggantian nama.

| Fungsionalitas | Detail |
| :--- | :--- |
| **Efek Scroll** | Mengelola efek *scrolling* pada Navbar dan tombol *Scroll-to-Top*. |
| **Menu Responsif** | Menggunakan `toggleMenu()` untuk *sidebar* menu di perangkat seluler. |
| **Modal Login** | Mengelola tampilan dan penutupan *Login Modal* melalui `openModal()` dan `closeModal()`. |
| **Carousel Hero** | Mengelola perubahan *slide* otomatis (5 detik) dan navigasi manual. |
| **Testimonial Slider** | Mengelola perubahan testimonial otomatis (7 detik) dan navigasi panah. |

**Catatan:** Fungsionalitas `changeTestimonial()` dan `nextSlide()` tetap berfungsi karena hanya mengelola indeks array (0, 1, 2, dst.), bukan konten teks.
