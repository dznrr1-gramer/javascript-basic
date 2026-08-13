const tahunLahir = 2008;
const sekarang = new Date();
const tahunSekarang = sekarang.getFullYear();

const umur = tahunSekarang - tahunLahir;

console.log(`Umur: ${umur} tahun`);