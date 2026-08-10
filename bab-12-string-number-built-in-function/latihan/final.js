const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";

console.log("===== DATA PRODUK =====");
console.log("Nama  : " + namaProduk.trim());
console.log("Harga : Rp" + Number(hargaProduk));
console.log("Kode  : " + kodeProduk);
console.log("kode awal : " + kodeProduk.startsWith("PROD"));
console.log("kode akhir : " + kodeProduk.endsWith("001"));
console.log("=======================");

// jawab:
// 1.Mengapa perlu .trim()?
// Menghapus spasi tidak sengaja di awal/akhir input pengguna agar pencocokan data dan validasi tidak bermasalah.
// 2. Apa perbedaan .replace() dan .replaceAll()?
// .replace() hanya mengganti pertama kali ketemu, sedangkan .replaceAll() mengganti semua ketemuannya
// 3. Apa perbedaan parseInt() dan parseFloat()?
// parseInt() hanya mengambil angka pertama, sedangkan parseFloat() mengambil angka pertama dan decimal
// 4. Kapan Number() lebih cocok digunakan?
// Number() lebih cocok digunakan ketika ingin mengubah string menjadi number
// 5. Mengapa .toFixed() menghasilkan String?
// Karena .toFixed() menghasilkan string
// 6. Mengapa .toLowerCase() berguna ketika membuat fitur pencarian?
// Karena .toLowerCase() berguna ketika ingin membuat fitur pencarian
// 7. Menurutmu, method mana yang paling sering digunakan dalam aplikasi nyata? Jelaskan alasannya.
// Number() lebih cocok digunakan ketika ingin mengubah string menjadi number