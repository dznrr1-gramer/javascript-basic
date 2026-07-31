let saldo = 150000;
let tarikTunai = 100000;

if (tarikTunai < saldo) {
    console.log("Penarikan Berhasil");
    console.log("Saldo tersisa:", saldo - tarikTunai);
} else {
    console.log("Saldo tidak mencukupi");
}