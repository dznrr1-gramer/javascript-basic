let antrian = [];
antrian.push("Budi");
antrian.push("Ani");
antrian.push("Citra");
let dilayani = antrian.shift();
antrian.push("Dedi");
antrian.unshift("Eka");
for (let i = 0; i < antrian.length; i++) {
  console.log(i + 1 + ". " + antrian[i]);
}