const akun = {
  username: "budi123",
  password: "rahasia",
  email: "budi@email.com",
};

let properti = "password";
delete akun[properti];
console.log(akun);