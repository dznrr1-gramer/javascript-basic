// Membuat objek kelas
const kelas = {
  namaKelas: "XII RPL 1",
  jumlahSiswa: 32,
  ketuaKelas: "Dzulfian Nur Raihan",
  daftarMapel: ["Matematika", "Informatika", "Dasar Pemrograman", "AI Programming"]
};

// Menampilkan data yang diminta
console.log("Nama Kelas :" + (kelas.namaKelas));
console.log("Jumlah Siswa :" + (kelas.jumlahSiswa));
console.log("Ketua Kelas :" + (kelas.ketuaKelas));
console.log("Mapel Pertama :" + (kelas.daftarMapel[0]));
console.log("Mapel Terakhir :" + (kelas.daftarMapel[kelas.daftarMapel.length - 1]));