function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan.";
    }
    return a / b;
}

console.log("Hasil Penjumlahan: " + tambah(10, 5));
console.log("Hasil Pengurangan: " + kurang(10, 5));
console.log("Hasil Perkalian: " + kali(10, 5));
console.log("Hasil Pembagian: " + bagi(10, 5));
console.log("Hasil Pembagian dengan nol: " + bagi(10, 0));