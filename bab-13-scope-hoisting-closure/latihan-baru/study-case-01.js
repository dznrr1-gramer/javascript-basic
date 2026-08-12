function buatKeranjang() {
  // Variable private (tidak dapat diakses dari luar)
  let items = [];

  return {
    tambah: function(nama, harga) {
      items.push({ nama, harga });
    },

    hapus: function(nama) {
      const index = items.findIndex(item => item.nama.toLowerCase() === nama.toLowerCase());
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`\n${nama} berhasil dihapus.\n`);
      } else {
        console.log(`\n${nama} tidak ditemukan dalam keranjang.\n`);
      }
    },

    lihatKeranjang: function() {
      console.log("===== KERANJANG =====");
      if (items.length === 0) {
        console.log("Keranjang belanja kosong.");
        return;
      }
      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
      });
    },

    hitungTotal: function() {
      return items.reduce((total, item) => total + item.harga, 0);
    },

    jumlahItem: function() {
      return items.length;
    }
  };
}


const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.lihatKeranjang();

keranjang.hapus("Mouse");

keranjang.lihatKeranjang();

// Membuktikan enkapsulasi/data private
console.log("Akses langsung keranjang.items:", keranjang.items); // Output: undefined

// Fitur tambahan: Jumlah Item & Total
console.log("Jumlah item:", keranjang.jumlahItem()); // Output: 1
console.log("Total Belanja: Rp" + keranjang.hitungTotal()); // Output: Rp250000