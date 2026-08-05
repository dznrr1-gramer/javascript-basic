let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];
let posisiKeyboard = inventaris.indexOf("Keyboard");
let printerAda = inventaris.includes("Printer");
let mouseGantiHeadset = inventaris.splice(1, 1, "Headset");
let duaBarangTerakhir = inventaris.slice(-2);

console.log("Inventaris terbaru: " + inventaris);
console.log("Posisi Keyboard: " + posisiKeyboard);
console.log("Apakah Printer ada? " + printerAda);
console.log("Dua barang terakhir: " + duaBarangTerakhir);