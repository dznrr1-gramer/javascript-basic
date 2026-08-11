const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";

    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

// Output:
// Dalam
// Luar
// Global

// Saat dalam() dipanggil, console.log(nama) mencari nama di dalam scopenya sendiri dan menemukan "Dalam".
// Saat console.log(nama) pada fungsi luar() dipanggil, pencarian dimulai dari scope luar() dan menemukan "Luar".
// Saat console.log(nama) di tingkat terluar dipanggil, variabel yang ditemukan adalah variabel global "Global".