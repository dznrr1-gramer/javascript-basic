function tampilkanInfo(keterangan, nilai) {
  console.log("keterangan  :", nilai);
  console.log("Tipe   :", typeof nilai);
}

const profil = {
    nama: "Dzulfian Nur Raihan",
    umur: 19,
    alamat: {
        jalan: "Jl. Mayor Kmari Sampurno Gg.2/Dosen No.18",
        kota: "Lumajang",
        provinsi: "Jawa Timur"
    },
    sekolah: "Pondok IT",
    jurusan: "Teknik Informatika",
    hobi: {
        1: "Membaca",
        2: "Ngoding",
        3: "Gaming",
        4: "Olahraga",
        5: "Memasak"
    },
    nomerTelepon: undefined,
    aktif: true
};

let sudahLulus = true;

tampilkanInfo("nama = " , (profil.nama)); // Nilai: string
tampilkanInfo("umur = " , (profil.umur)); // Nilai: number
tampilkanInfo("sudahLulus =" , (sudahLulus)); // Nilai: boolean
tampilkanInfo("alamat =" , (profil.alamat)); // Nilai: object
tampilkanInfo("nomerTelepon =" , (profil.nomerTelepon)); // Nilai: undefined
tampilkanInfo("hobi ="  , (profil.hobi)); // Nilai: object
tampilkanInfo("profil ="  , (profil)); // Nilai: object