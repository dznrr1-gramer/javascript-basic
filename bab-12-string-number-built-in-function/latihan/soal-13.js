console.log(Number("42px"));
console.log(parseInt("42px"));

// penjelanan mengapa hasilnya berbeda 
// Number("42px") -> karena 42px tidak kebaca pxnya
// parseInt("42px") -> terbaca semua

// Prediksi hasil:

// ```javascript
// console.log(Number("42px"));
// console.log(parseInt("42px"));
// ```

// Jelaskan mengapa hasilnya berbeda.