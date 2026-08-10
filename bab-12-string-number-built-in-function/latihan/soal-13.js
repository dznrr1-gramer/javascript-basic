console.log(Number("42px"));// output: nan
console.log(parseInt("42px"));// output: 42

// penjelanan mengapa hasilnya berbeda 
// Number("42px") -> karena 42px tidak kebaca pxnya
// parseInt("42px") -> terbaca semua