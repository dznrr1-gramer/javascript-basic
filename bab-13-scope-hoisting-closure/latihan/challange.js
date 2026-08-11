function buatAkun(namaAwal, saldoAwal) {
  let nama = namaAwal;
  let saldo = saldoAwal;

  return {
    lihatProfil: function () {
      console.log("===== PROFIL =====");
      console.log(`Nama: ${nama}\n`);
    },
    cekSaldo: function () {
      console.log(`Saldo: Rp${saldo}\n`);
    },
    tambahSaldo: function (jumlah) {
      saldo += jumlah;
      console.log("Saldo berhasil ditambahkan.");
      console.log(`Saldo sekarang: Rp${saldo}\n`);
    },
    kurangiSaldo: function (jumlah) {
      if (jumlah <= saldo) {
        saldo -= jumlah;
        console.log("Saldo berhasil dikurangi.");
        console.log(`Saldo sekarang: Rp${saldo}\n`);
      } else {
        console.log("Saldo tidak mencukupi.\n");
      }
    }
  };
}

// Implementasi
const akunBudi = buatAkun("Budi", 100000);
const akunAni = buatAkun("Ani", 500000);

// Pengujian Akun Budi
akunBudi.lihatProfil();
akunBudi.cekSaldo();
akunBudi.tambahSaldo(50000);
akunBudi.kurangiSaldo(25000);

// Pengujian Akun Ani (Independen)
akunAni.lihatProfil();
akunAni.cekSaldo();
akunAni.kurangiSaldo(600000); // Saldo tidak mencukupi

// Scope: Jangkauan atau wilayah di mana suatu variabel dapat diakses dan digunakan di dalam kode.
// Global Scope vs Local Scope: Variabel Global Scope dapat diakses di mana saja dalam program, sedangkan Local Scope hanya dapat diakses di dalam area tertentu tempat variabel dideklarasikan (seperti di dalam fungsi atau blok).
// Block Scope: Batas akses variabel yang hanya berlaku di dalam kurung kurawal { ... } tertentu (di buat dengan let atau const), seperti pada if, for, atau while.
// Scope Chain: Proses pencarian bertingkat yang dilakukan JavaScript untuk menemukan variabel, dimulai dari scope lokal saat ini hingga ke scope terluar (global).
// Hoisting: Perilaku JavaScript yang seolah-olah "mengangkat" deklarasi variabel atau fungsi ke bagian atas scopenya sebelum kode dieksekusi.
// Perbedaan Hoisting var vs let/const: var di-hoist dan diinisialisasi dengan undefined, sedangkan let dan const di-hoist ke dalam Temporal Dead Zone (TDZ) sehingga tidak bisa diakses sebelum baris deklarasinya (menyebabkan Error).
// Closure: Kemampuan sebuah fungsi untuk "mengingat" dan mengakses variabel-variabel dari scope induknya (outer scope) meskipun fungsi induk tersebut telah selesai dieksekusi.
// Closure untuk Data Privat: Variabel disimpan di dalam scope fungsi induk sehingga tidak dapat diakses atau diubah langsung dari luar secara global, melainkan hanya bisa dimanipulasi melalui metode khusus yang disediakan.
// Dua Closure Memiliki Data Berbeda: Setiap kali fungsi induk dipanggil, JavaScript membuat lingkungan eksekusi (context/scope) baru yang terpisah di memori.
// Manfaat Closure: Digunakan untuk encapsulation (data privacy), menghindari polluting global scope, membuat function factory, serta mempertahankan state dalam event handling atau pemrosesan asinkron.