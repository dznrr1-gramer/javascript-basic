console.log(a);
var a = 10;

console.log(b);
let b = 20;

// undefined
// Uncaught ReferenceError: Cannot access 'b' before initialization

// console.log(a) berhasil dan mencetak undefined karena var a di-hoist.
// var a = 10 memberikan nilai 10 pada a.
// console.log(b) langsung menghentikan program karena b menggunakan let