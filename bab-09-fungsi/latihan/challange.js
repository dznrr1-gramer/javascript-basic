function hitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi.toFixed(2);
}

console.log("BMI = " + hitungBMI(65, 1.7));

// Buat program sederhana **Kalkulator BMI** menggunakan Function.

// Data:

// ```javascript
// let berat = 65;
// let tinggi = 1.7;
// ```

// Buat function:

// ```javascript
// hitungBMI(berat, tinggi)
// ```

// Rumus:

// ```
// BMI = berat / (tinggi * tinggi)
// ```

// Gunakan `return`, lalu tampilkan hasil BMI.

// > **Bonus:** Bulatkan hasil BMI menjadi 2 angka di belakang koma menggunakan method `.toFixed(2)`.