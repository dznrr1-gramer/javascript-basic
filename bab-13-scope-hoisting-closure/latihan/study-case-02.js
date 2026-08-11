function buatRekening(saldoAwal) {
  let saldo = saldoAwal; // Privat, tidak bisa diakses langsung dari luar

  return {
    cekSaldo: function () {
      console.log(`Saldo saat ini: ${saldo}`);
    },
    setor: function (jumlah) {
      saldo += jumlah;
      console.log(`Setoran berhasil. Saldo: ${saldo}`);
    },
    tarik: function (jumlah) {
      if (jumlah <= saldo) {
        saldo -= jumlah;
        console.log(`Penarikan berhasil. Saldo: ${saldo}`);
      } else {
        console.log("Saldo tidak mencukupi.");
      }
    }
  };
}

// Pengujian:
const rekening = buatRekening(1000000);

rekening.cekSaldo();
rekening.setor(500000);
rekening.tarik(200000);
rekening.cekSaldo();

// Percobaan manipulasi langsung:
rekening.saldo = 999999999; 
rekening.cekSaldo(); // Saldo asli tetap aman (1300000)