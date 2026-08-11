console.log(umur);

const umur = 17;

//Sama seperti let, variabel const akan menghasilkan ReferenceError jika diakses sebelum deklarasi

console.log(umur);

var umur = 17;

// var: Di-hoist dan diinisialisasi awal dengan nilai undefined (tidak menghentikan eksekusi program).
// const: Di-hoist tetapi masuk ke TDZ tanpa inisialisasi (langsung menghasilkan Error).