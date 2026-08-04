let playlist = [];

playlist.push("Lagu A");
playlist.push("Lagu B");
playlist.push("Lagu C");
playlist.push("Lagu D");
playlist.push("Lagu E");
playlist.pop();
playlist.unshift("Lagu Baru");
for (let i = 0; i < playlist.length; i++) {
  console.log(i + 1 + ". " + playlist[i]);
}
console.log(`Total Lagu : ${playlist.length}`);

// Lakukan langkah berikut:

// - tambahkan 5 lagu
// - hapus lagu terakhir
// - tambahkan lagu baru di awal
// - tampilkan seluruh playlist menggunakan perulangan `for`
// - tampilkan jumlah lagu

// Contoh output:

// ```
// === Playlist Saya ===

// 1. Lagu A
// 2. Lagu B
// 3. Lagu C
// 4. Lagu D
// 5. Lagu E

// Total Lagu : 5