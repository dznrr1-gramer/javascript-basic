// function prosesLogin() {
//   const tokenSesi = "abc123";

//   console.log("Login berhasil");
//   console.log("Token:", tokenSesi);
// }

// prosesLogin();
// console.log(tokenSesi);

//ReferenceError: tokenSesi is not defined
//tokenSesi tidak dapat diakses dari luar karena bersifat Function Scope.

// Global Scope
const namaUser = "Budi";

function prosesLogin() {
  const tokenSesi = "abc123";

  console.log("Login berhasil");
  console.log("Token:", tokenSesi);
  console.log("User:", namaUser); // Bisa diakses dari dalam fungsi
}

prosesLogin();
console.log("User di luar:", namaUser); // Bisa diakses dari luar fungsi