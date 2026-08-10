const username = "   BUDI123   ";

console.log("Username: " + username.trim().toLowerCase());

username.length>=5
    ? console.log("Username valid")
    : console.log("Username terlalu pendek");

// Sebuah aplikasi menerima username dari pengguna.

// Input pengguna:

// ```javascript
// const username = "   BUDI123   ";
// ```

// Program harus:

// 1. Menghapus spasi di awal dan akhir.
// 2. Mengubah username menjadi huruf kecil.
// 3. Memeriksa apakah username memiliki minimal 5 karakter.
// 4. Menampilkan username yang sudah dibersihkan.

// Contoh output:

// ```text
// Username: budi123
// Username valid
// ```

// ### Tantangan

// Bagaimana jika user memasukkan:

// ```javascript
// const username = "   AB   ";
// ```

// Output:

// ```text
// Username: ab
// Username terlalu pendek