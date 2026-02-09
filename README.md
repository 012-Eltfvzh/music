# 🌐 Web Aplikasi Peminjaman & Booking

Selamat datang di repository **Web Aplikasi Peminjaman & Booking** 🎉
Aplikasi ini dibuat sebagai project web berbasis **React** untuk mengelola fitur **login, register, peminjaman/booking**, serta integrasi dengan **backend API** dan **database MySQL (Laragon)**.

---

## ✨ Fitur Utama

* 🔐 **Autentikasi User**

  * Login
  * Register
  * Logout
* 👤 **Manajemen User**

  * Menyimpan data user ke database
  * Mengambil data user dari API
* 📦 **Peminjaman / Booking**

  * Menampilkan data peminjaman
  * Tambah, update, dan hapus data
* 🌐 **Integrasi API**

  * Menggunakan REST API (GET, POST, PUT, DELETE)
* 🎨 **UI Modern**

  * React + Tailwind CSS
  * Icon menggunakan Lucide React

---

## 🛠️ Teknologi yang Digunakan

### Frontend

* ⚛️ React JS
* 🎨 Tailwind CSS
* 🔗 Axios
* 🧩 Lucide React

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🗄️ MySQL
* 📂 Multer (upload file)

### Database

* 🐬 MySQL (menggunakan **Laragon**)

---

## 📁 Struktur Folder (Contoh)

```
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── uploads/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Cara Menjalankan Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/username/nama-repo.git
```

### 2️⃣ Install Dependency

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### Backend

```bash
cd backend
npm install
node index.js
```

---

## 🗄️ Konfigurasi Database (Laragon)

1. Jalankan **Laragon**
2. Aktifkan **Apache** dan **MySQL**
3. Buat database baru (contoh: `db_peminjaman`)
4. Import file `.sql` (jika ada)
5. Sesuaikan konfigurasi database di backend:

```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_peminjaman'
});
```

---

## 🔑 Endpoint API (Contoh)

| Method | Endpoint     | Deskripsi          |
| ------ | ------------ | ------------------ |
| GET    | /users       | Ambil data user    |
| POST   | /register    | Register user      |
| POST   | /login       | Login user         |
| GET    | /booking     | Ambil data booking |
| POST   | /booking     | Tambah booking     |
| PUT    | /booking/:id | Update booking     |
| DELETE | /booking/:id | Hapus booking      |

---

## 📸 Screenshot

> Tambahkan screenshot aplikasi di sini untuk memperjelas tampilan UI.

---

## 🚀 Tujuan Project

Project ini dibuat untuk:

* Media pembelajaran **Fullstack Web Development**
* Ujikom / Tugas Akhir / Portofolio
* Melatih integrasi **Frontend & Backend**

---

## 👨‍💻 Developer

* **Nama**: Imam Mustaqim
* **Stack**: React, Node.js, MySQL

---

## 📄 Lisensi

Project ini bersifat **open-source** dan bebas digunakan untuk pembelajaran.

---

✨ Kalau kamu mau, aku bisa:

* Menyesuaikan README sesuai **ujikom**
* Menyederhanakan bahasanya
* Menambahkan badge GitHub
* Menyesuaikan dengan **tema musik / travel / peminjaman**
