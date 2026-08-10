const hargaBarang = "125000.50";
const jumlah = "3";

const subtotal = parseFloat( Number(hargaBarang) * Number(jumlah));
console.log("Harga   : Rp" + hargaBarang);
console.log("Jumlah  : " + jumlah);
console.log("Subtotal: Rp" + subtotal.toFixed(2));