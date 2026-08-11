const pajak = 10;

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100);

  return harga + totalPajak;
}

console.log(hitungHarga(100000));

// 1. Di mana `pajak` dibuat?
// 2. Di mana `totalPajak` dibuat?
// 3. Mengapa `hitungHarga()` dapat menggunakan `pajak`?
// 4. Apakah `totalPajak` dapat digunakan di luar fungsi?

// 1. pajak dibuat di: Global Scope (luar fungsi).
// 2. totalPajak dibuat di: Local / Function Scope dari hitungHarga().
// 3. Mengapa hitungHarga() dapat menggunakan pajak? Karena JavaScript menerapkan mekanisme Scope Chain. Jika variabel tidak ditemukan di scope lokal, JavaScript akan mencari ke scope di atasnya ( scope outer / global).
// 4. Apakah totalPajak dapat digunakan di luar fungsi? Tidak, karena totalPajak berada di dalam Function Scope.