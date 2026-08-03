const nilai = [80, 95, 60, 75, 100];

let total = 0;
let rataRata = 0;
for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
    rataRata = total / nilai.length;
}
console.log(total);
console.log(rataRata);