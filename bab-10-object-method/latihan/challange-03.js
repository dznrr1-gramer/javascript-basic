const reknening = {
  nama: "Dzul",
  saldo: 1000000,
  setor: function (jumlah) {
    this.saldo += jumlah;
  },
  tarik: function (jumlah) {
    this.saldo -= jumlah;
  },  
  cekSaldo: function () {
    console.log("Nama: " + this.nama);
    console.log("Saldo: " + this.saldo);    
  }
}

reknening.cekSaldo();
reknening.setor(500000);
reknening.cekSaldo();
reknening.tarik(100000);
reknening.cekSaldo();