const produk = {
  nama: "Laptop",
  harga: 15000000,
  stock: 10,

  tambahStock: function (jumlah) {
    this.stock += jumlah;
  },

  kurangiStock: function (jumlah) {
    this.stock -= jumlah;
  },

    tampilkanInfo: function () {
    console.log("Nama: " + this.nama);
    console.log("Harga: " + this.harga);
    console.log("Stock: " + this.stock);
  }
};

produk.tambahStock(5);
produk.kurangiStock(2);
produk.tampilkanInfo();