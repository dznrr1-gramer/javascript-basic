function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitung = buatPenghitung();

penghitung();
penghitung();
penghitung();

// Output:
// 1
// 2
// 3

// Di mana hitungan dibuat? Di dalam Function Scope buatPenghitung().
// Mengapa masih bisa digunakan setelah fungsi selesai? Karena fungsi anonim di dalamnya membentuk Closure, yaitu mekanisme di mana fungsi dalam "mengingat" variabel dari scope induknya bahkan setelah fungsi induk selesai dieksekusi.
// Fungsi mana yang mengingat hitungan? Fungsi anonim yang dikembalikan (return