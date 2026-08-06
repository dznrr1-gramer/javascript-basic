const akunBank = {
  nama: "John Doe",
  saldo: 1000,
  setor: function (jumlah) {
    this.saldo += jumlah;
  }
};

console.log("Saldo awal : " + akunBank.saldo);
akunBank.setor(500);
console.log("Saldo sekarang : " + akunBank.saldo);