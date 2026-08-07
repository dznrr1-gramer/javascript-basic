 const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};

for (const key in biodata) {
  console.log(key + ": " + biodata[key]);
}