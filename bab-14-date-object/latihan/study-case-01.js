const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");

const selisihMs = deadline.getTime() - sekarang.getTime();

const selisihHari = Math.ceil(selisihMs / (1000 * 60 * 60 * 24));

const deadlineFormatted = deadline.toLocaleDateString("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

console.log(`Deadline: ${deadlineFormatted}`);

if (selisihHari > 0) {
  console.log(`Sisa waktu: ${selisihHari} hari lagi`);
} else if (selisihHari === 0) {
  console.log("Sisa waktu: Hari ini deadline!");
} else {
  console.log("Deadline sudah terlewat.");
}