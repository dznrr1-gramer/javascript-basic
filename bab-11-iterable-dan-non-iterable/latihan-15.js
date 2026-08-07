 const nilai = [75, 90, 88, 100, 67, 95];
 let terbesar = 0;

 for (let n of nilai) {
    if (n > terbesar) {
        terbesar = n;
    }
 }

 console.log("Nilai tertinggi : " , terbesar);