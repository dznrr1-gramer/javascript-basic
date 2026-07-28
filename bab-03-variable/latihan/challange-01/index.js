const Produk = "Buku Tulis"; // Produk : Buku Tulis
let Harga = 8000; // Harga : 8000
let Jumlah = 5; // Jumlah : 5
const Subtotal = Harga * Jumlah; // Subtotal : 40000
let Pajak = Subtotal * 0.22; // Pajak : 4400
const Total = Subtotal + Pajak; // Total : 44400

console.log("Produk : " + Produk);
console.log("Harga : " + Harga);
console.log("Jumlah : " + Jumlah);
console.log("Subtotal : " + Subtotal);
console.log("Pajak : " + Pajak);
console.log("Total : " + Total);