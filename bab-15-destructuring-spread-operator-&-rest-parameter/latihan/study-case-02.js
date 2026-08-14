const keranjangA = ["Keyboard", "Mouse"];
const keranjangB = ["Monitor", "Headset"];
const keranjangGabungan = [...keranjangA, ...keranjangB];
const [produkPertama, produkKedua, ...sisaProduk] = keranjangGabungan;
const produkTerakhir = sisaProduk[sisaProduk.length - 1];

console.log(`Produk pertama : ${produkPertama}`);
console.log(`Produk kedua   : ${produkKedua}`);
console.log(`Produk terakhir: ${produkTerakhir}`);