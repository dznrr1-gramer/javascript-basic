const nilai = [90, 80, 85, 100, 95];
let total = 0;
let average = 0;

for (let n of nilai) {
  total += n;
}

const rataRata = total / nilai.length;

console.log("Rata-rata:", rataRata);