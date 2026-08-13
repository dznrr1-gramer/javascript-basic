const tanggal = new Date("2026-08-17");

const hari = tanggal.toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

console.log(hari); 