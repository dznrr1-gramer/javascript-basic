let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;

let bolehMasuk = (sudahLogin && sudahVerifikasi) || premium;
let dapatFiturPremium = (sudahLogin && !sudahVerifikasi) || premium;

console.log(bolehMasuk); // Output: true
console.log(dapatFiturPremium); // Output: true