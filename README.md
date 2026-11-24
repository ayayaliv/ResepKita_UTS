# 🍳 ResepKita

Aplikasi mobile **resep mudah dan tidak ribet untuk anak kost**, dibuat dengan **React Native (Expo)**.
Proyek UTS mata kuliah **Aplikasi Berbasis Platform**, Teknologi Informasi, ITB STIKOM Bali.

ResepKita mengumpulkan 12 resep sederhana berfoto lengkap dengan waktu memasak, tingkat kesulitan, kategori, daftar bahan, dan langkah memasak. Pengguna dapat masuk dengan username, mencari dan memfilter resep, menyimpan favorit, serta mengatur foto profil.

## Tim Pengembang

| Nama | NIM |
| --- | --- |
| Putu Kencana Sridewi | 240040068 |
| Dewa Ayu Dwicahya Dewanti | 240040146 |

**Dosen Pengampu:** Made Agus Putra Subali, S.Kom., M.Kom.

## Fitur

- **Welcome dan Login:** masuk dengan username dan kata sandi (minimal 4 karakter). Sesi tersimpan sehingga tidak perlu masuk ulang saat aplikasi dibuka kembali.
- **Beranda:** sapaan dengan username dan daftar 12 resep berfoto.
- **Cari Resep:** pencarian berdasarkan nama dan filter kategori (Nasi, Mie, Telur, Daging, Camilan).
- **Detail Resep:** foto besar, bahan, dan langkah memasak berurutan.
- **Favorit:** simpan dan hapus resep favorit.
- **Profil:** info akun, ganti foto profil dari kamera atau galeri (foto tersimpan per username), dan keluar.

## Teknologi

| Teknologi | Fungsi |
| --- | --- |
| React Native dan Expo | Kerangka aplikasi mobile lintas platform |
| React Navigation (native-stack dan bottom-tabs) | Stack Navigation dan Bottom Tab Navigation |
| @react-native-async-storage/async-storage | Menyimpan sesi login dan foto profil di perangkat |
| expo-image-picker | Mengambil foto profil dari kamera atau galeri |
| @expo/vector-icons (Ionicons) | Ikon aplikasi |
| react-native-safe-area-context dan react-native-screens | Area aman layar dan optimasi navigasi |

## Navigasi

Aplikasi memiliki **7 screen** dengan dua jenis navigasi yang digabung (nested):

- **Stack Navigation:** Welcome → Login → MainTabs → Detail Resep
- **Bottom Tab Navigation:** Beranda, Cari Resep, Favorit Saya, Profil Saya

```
Root Stack
├── (belum masuk)
│   ├── Welcome
│   └── Login
└── (sudah masuk)
    ├── MainTabs (Bottom Tab)
    │   ├── Home (Beranda)
    │   ├── Explore (Cari Resep)
    │   ├── Favorit
    │   └── Profil
    └── RecipeDetail
```

Layar yang tersedia berubah otomatis sesuai status login.

## Cara Menjalankan

**Prasyarat:** [Node.js](https://nodejs.org) (versi LTS), Git, dan aplikasi **Expo Go** di ponsel (atau emulator Android).

```bash
# 1. Clone repositori
git clone https://github.com/ayayaliv/ResepKita_UTS.git
cd ResepKita_UTS

# 2. Pasang dependensi
npm install

# 3. Jalankan aplikasi
npx expo start
```

Setelah itu:

- Pindai **QR code** yang muncul di terminal dengan aplikasi **Expo Go**, atau
- tekan **`a`** untuk membuka di emulator Android.

Jika tampilan tidak berubah setelah memperbarui kode, jalankan `npx expo start -c` untuk membersihkan cache.

## Struktur Folder

```
ResepKita/
├── App.js
├── app.json
├── package.json
├── assets/
│   └── recipes/          # 12 foto makanan
└── src/
    ├── theme.js          # palet warna terpusat
    ├── data/
    │   └── recipes.js    # data 12 resep dan daftar kategori
    ├── context/
    │   ├── AuthContext.js        # data pengguna dan sesi login
    │   └── FavoritesContext.js   # daftar resep favorit
    ├── components/
    │   ├── RecipeCard.js         # kartu resep
    │   └── CategoryChip.js       # tombol filter kategori
    ├── navigation/
    │   └── AppNavigator.js       # Stack dan Bottom Tab
    └── screens/
        ├── WelcomeScreen.js
        ├── LoginScreen.js
        ├── HomeScreen.js
        ├── ExploreScreen.js
        ├── FavoritesScreen.js
        ├── ProfileScreen.js
        └── RecipeDetailScreen.js
```

## Palet Warna

| Peran | Hex |
| --- | --- |
| Primary (oranye) | `#E85D04` |
| Secondary (kuning) | `#FAA307` |
| Background (krem) | `#FFF8F0` |
| Surface (putih) | `#FFFFFF` |
| Text | `#2B2B2B` |
| Muted | `#8D8D8D` |
| Accent (hijau tosca) | `#2A9D8F` |
| Border | `#EADBC8` |
| Error | `#C62828` |

Seluruh warna disimpan di `src/theme.js` dan dipakai oleh semua layar.

## Aset dan Lisensi

- **Library:** React Native, Expo, React Navigation, AsyncStorage, expo-image-picker, dan Ionicons, seluruhnya berlisensi **MIT**.
- **Foto makanan:** sumber, fotografer, dan lisensi tiap foto dicantumkan pada **Laporan Proyek, Bab IV bagian 4.2**.
- **Data resep:** ditulis sendiri oleh tim.
- **Emoji:** emoji bawaan perangkat (standar Unicode).
- **Foto profil:** dipilih pengguna dari perangkatnya dan tidak diunggah ke server.

## Catatan Pengembangan

- Login bersifat **simulasi lokal** tanpa server. Kata sandi hanya divalidasi dan tidak disimpan.
- Daftar favorit disimpan di memori, sehingga kembali kosong saat aplikasi ditutup.
- Foto profil disimpan sebagai alamat berkas di perangkat. Jika sistem membersihkan cache, foto dapat hilang dan aplikasi menampilkan huruf awal username.

## Alur Kerja Git

| Branch | Fungsi |
| --- | --- |
| `main` | Hasil gabungan yang sudah berjalan |
| `cahya` | Pengembangan bagian Cahya |
| `kencana` | Pengembangan bagian Kencana |

Setiap anggota bekerja di branch masing-masing, lalu digabung ke `main` melalui Pull Request.

## Pembagian Kontribusi

| Anggota | File yang dikerjakan |
| --- | --- |
| Cahya | `theme.js`, `recipes.js`, `WelcomeScreen.js`, `HomeScreen.js`, `RecipeDetailScreen.js`, `ProfileScreen.js`, `README.md`, pemasangan library, pengumpulan foto resep |
| Kencana | `App.js`, `AuthContext.js`, `LoginScreen.js`, `RecipeCard.js`, `AppNavigator.js`, `app.json`, `FavoritesContext.js`, `CategoryChip.js`, `ExploreScreen.js`, `FavoritesScreen.js` |