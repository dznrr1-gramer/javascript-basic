const siswa = {
  nama: "Budi",
  umur: 17,
  kelas: "XI RPL",
};

for (const key in siswa) {
  console.log(key + ": " + siswa[key]);
}