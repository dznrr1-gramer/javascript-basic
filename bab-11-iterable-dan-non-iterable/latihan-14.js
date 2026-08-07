 const daftarBelanja = [
  "Beras",
  "Minyak",
  "Gula",
  "Telur",
  "Sabun",
];

for (let item of daftarBelanja) {
    const index = daftarBelanja.indexOf(item) + 1;
    console.log(index, ". " ,item);
}