// function cekKelulusan(nilai) {
//     if (nilai >= 75) {
//         console.log("Nilai: " + nilai + " - Lulus");
//         return "Lulus";
//     } else {
//         console.log("Nilai: " + nilai + " - Tidak Lulus");
//         return "Tidak Lulus";
//     }
// }

// let hasil1 = cekKelulusan(80);
// let hasil2 = cekKelulusan(60);


function cekKelulusan(nilai) {
    if (nilai >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}
console.log("Nilai: 80 - " + cekKelulusan(80));
console.log("Nilai: 60 - " + cekKelulusan(60));