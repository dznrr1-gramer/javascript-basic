// 1. Membuat fungsi prosesNilai dengan Rest Parameter
function prosesNilai(...daftarNilai) {
  const tertinggi = Math.max(...daftarNilai); // Spread operator dipakai di sini untuk Math.max
  const terendah = Math.min(...daftarNilai);  // dan Math.min
  const total = daftarNilai.reduce((acc, curr) => acc + curr, 0);

  return {
    tertinggi,
    terendah,
    total
  };
}

const nilai = [80, 90, 75, 95, 85];
const hasil = prosesNilai(...nilai);
const { tertinggi: nilaiTertinggi, terendah: nilaiTerendah, total: totalNilai } = hasil;

console.log(`Nilai tertinggi : ${nilaiTertinggi}`);
console.log(`Nilai terendah  : ${nilaiTerendah}`);
console.log(`Total nilai     : ${totalNilai}`);