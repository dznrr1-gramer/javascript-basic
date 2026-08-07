 const kelas = {
  nama: "JavaScript Dasar",
  mentor: "Pak Budi",
  jumlahSiswa: 20,
};

for (const key in kelas) {
  console.log(key + ": " + kelas[key]);
}

kelas.ruangan = "Lab Komputer";
for (const key in kelas) {
  console.log(key + ": " + kelas[key]);
}