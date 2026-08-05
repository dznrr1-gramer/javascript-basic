function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas + uts + uas) / 3;
}

function cekKelulusan(nilai) {
    if (nilai >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

const nilaiAkhir = hitungNilaiAkhir(80, 75, 90);
const status = cekKelulusan(nilaiAkhir);
console.log("Nilai Akhir : " + nilaiAkhir);
console.log("Status      : " + status);