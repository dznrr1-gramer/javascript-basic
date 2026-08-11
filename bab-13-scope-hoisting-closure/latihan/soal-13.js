function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

penghitungA();
penghitungA();

penghitungB();

penghitungA();
penghitungB();

// Output:
// 1
// 2
// 1
// 2
// 3

// penghitungA dan penghitungB tidak berbagi nilai hitungan karena setiap pemanggilan buatPenghitung() membuat lingkungan/scope eksekusi baru yang independen. Masing-masing instance closure memiliki ruang memori tersendiri untuk variabel hitungan