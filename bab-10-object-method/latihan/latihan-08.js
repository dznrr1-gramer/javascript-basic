const lampu = {
  warna: "merah",
  nyalakan: function () {
      console.log("Lampu berwarna " + this.warna + " menyala.");
  }
};

lampu.nyalakan();