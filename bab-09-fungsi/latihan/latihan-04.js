function hitungDiskon(harga, diskon = 10) {
    console.log(harga);
    console.log(harga - (harga * diskon / 100));
}

hitungDiskon(100000);
hitungDiskon(100000, 20);

// - harga
// - diskon (default = 10)

// Rumus:

// ```
// harga - (harga × diskon / 100)
// ```

// Contoh:

// ```javascript
// console.log(hitungDiskon(100000));
// console.log(hitungDiskon(100000, 20));