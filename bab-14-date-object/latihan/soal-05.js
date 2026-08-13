const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const tanggal = new Date("2026-08-17");
const indeksBulan = tanggal.getMonth();

console.log("Bulan:", namaBulan[indeksBulan]);