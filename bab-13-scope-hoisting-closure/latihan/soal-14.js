function buatCounter() {
  let jumlahKlik = 0;

  return function () {
    jumlahKlik++;
    console.log("Jumlah klik: " + jumlahKlik);
  };
}

// Pengujian:
const counter = buatCounter();

counter();
counter();
counter();
counter();