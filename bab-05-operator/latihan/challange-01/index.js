const tugas = 80;
const uts = 75;
const uas = 90;

const nilaiAkhir = (tugas + uts + uas) / 3;

const lulus = nilaiAkhir >= 75;

console.log(`Nilai akhir siswa adalah ${nilaiAkhir}`);
console.log(`Siswa ${lulus ? "Lulus" : "Tidak Lulus"}`);

// Output:
// Nilai akhir siswa adalah 81.66666666666667
// Siswa Lulus