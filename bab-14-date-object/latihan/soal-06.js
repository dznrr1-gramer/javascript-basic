const tanggal = new Date("2026-08-17");

const dd = String(tanggal.getDate()).padStart(2, '0');
const mm = String(tanggal.getMonth() + 1).padStart(2, '0'); // Ditambah 1 untuk format tampilan
const yyyy = tanggal.getFullYear();

const formatTanggal = `${dd}/${mm}/${yyyy}`;
console.log(formatTanggal); 