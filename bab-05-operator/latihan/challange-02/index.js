let hargaBuku = 45000;
let hargaPensil = 15000;
let jumlahBeliBuku = 4;
let diskonBuku = 15000;
let jumlahBeliPensil = 2;
let diskonPensil = 5000;

let totalHargaPensil = (hargaPensil * jumlahBeliPensil) - diskonPensil;
let totalHargaBuku = (hargaBuku * jumlahBeliBuku) - diskonBuku;

let totalBayar = totalHargaBuku;
totalBayar += totalHargaPensil;

let bukuLebihMahal = hargaBuku > hargaPensil;
let diskonPensilLebihKecil = diskonPensil <= diskonBuku;

let dapatBonus = (jumlahBeliBuku >= 3) && (jumlahBeliPensil >= 2);
let dapatGratisOngkir = (totalBayar > 100000) || (jumlahBeliBuku > 5);

console.log("Total Harga Buku   : Rp", totalHargaBuku);
console.log("Total Harga Pensil : Rp", totalHargaPensil);
console.log("Total Harus Dibayar: Rp", totalBayar);

console.log("Apakah buku lebih mahal dari pensil? :", bukuLebihMahal);
console.log("Apakah diskon pensil <= diskon buku? :", diskonPensilLebihKecil);

console.log("Mendapatkan Bonus        :", dapatBonus);
console.log("Mendapatkan Gratis Ongkir:", dapatGratisOngkir);

// - ✅ 2 Operator Aritmatika
// - ✅ 1 Operator Assignment
// - ✅ 2 Operator Perbandingan
// - ✅ 2 Operator Logika
