const biodata = {
  nama: "Dzul",
  umur: 20,
  pekerjaan: "freelance",
  alamat: "Lumajang",

    tampilkanBiodata: function () {
        console.log("Nama: " + this.nama);
        console.log("Umur: " + this.umur);
        console.log("Pekerjaan: " + this.pekerjaan);
        console.log("Alamat: " + this.alamat);
    }
};

biodata.tampilkanBiodata();