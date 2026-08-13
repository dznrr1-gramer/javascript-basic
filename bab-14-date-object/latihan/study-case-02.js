const tanggalTransaksi = new Date("2026-08-13");
const jatuhTempo = new Date(tanggalTransaksi);

jatuhTempo.setDate(jatuhTempo.getDate() + 7);

const formatTanggal = (dateObj) => {
  return dateObj.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};

console.log(`Tanggal Transaksi : ${formatTanggal(tanggalTransaksi)}`);
console.log(`Jatuh Tempo       : ${formatTanggal(jatuhTempo)}`);