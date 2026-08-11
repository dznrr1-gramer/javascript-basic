function buatDompet(saldoAwal) {
  let saldo = saldoAwal; // Private variable

  return {
    cekSaldo: function () {
      console.log(`Saldo: ${saldo}`);
    },
    tambahSaldo: function (jumlah) {
      saldo += jumlah;
      console.log("Saldo berhasil ditambahkan :", saldo);
    },
    kurangiSaldo: function (jumlah) {
      if (jumlah <= saldo) {
        saldo -= jumlah;
        console.log("saldo berhasil dikurangi :", saldo);
      } else {
        console.log("Saldo tidak cukup.");
      }
    }
  };
}

// Pengujian:
const dompet = buatDompet(50000);

dompet.cekSaldo();
dompet.tambahSaldo(25000);
dompet.kurangiSaldo(10000);
dompet.cekSaldo();

console.log(dompet.saldo); // Output: undefined