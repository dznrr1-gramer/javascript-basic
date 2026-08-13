const tugas = [
  {
    nama: "Membuat Website Portfolio",
    deadline: "2026-08-20",
  },
  {
    nama: "Mengerjakan Latihan JavaScript",
    deadline: "2026-08-15",
  },
  {
    nama: "Presentasi Project",
    deadline: "2026-09-01",
  },
];

const hariIni = new Date("2026-08-13");

console.log("===== DAFTAR TUGAS =====\n");

tugas.forEach((item, index) => {
  const tglDeadline = new Date(item.deadline);

  const formatDeadline = tglDeadline.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const selisihMs = tglDeadline.getTime() - hariIni.getTime();
  const sisaHari = Math.ceil(selisihMs / (1000 * 60 * 60 * 24));

  let statusText = "";
  if (sisaHari > 0) {
    statusText = `${sisaHari} hari lagi`;
  } else if (sisaHari === 0) {
    statusText = "Hari ini!";
  } else {
    statusText = "Deadline sudah terlewat.";
  }

  console.log(`${index + 1}. ${item.nama}`);
  console.log(`   Deadline: ${formatDeadline}`);
  console.log(`   Status  : ${statusText}\n`);
});