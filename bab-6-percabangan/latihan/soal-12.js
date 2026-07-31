let totalBelanja = 320000;

if (totalBelanja >= 500000) {
    console.log("total belanja : Rp",totalBelanja);
    console.log("diskon 20% : Rp", (totalBelanja * 20) / 100);
    console.log("total yang harus dibayar: Rp", totalBelanja - (totalBelanja * 20) / 100);
} else if (totalBelanja >= 300000) {
    console.log("total belanja : Rp",totalBelanja);
    console.log("diskon 10% : Rp", (totalBelanja * 10) / 100);
    console.log("total yang harus dibayar: Rp", totalBelanja - (totalBelanja * 10) / 100);
} else {
    console.log("tidak mendapatkan diskon");
}

