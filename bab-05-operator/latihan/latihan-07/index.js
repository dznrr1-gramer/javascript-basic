console.log(10 == "10"); // Output: true
console.log(10 === "10"); // Output: false
console.log(false == 0); // Output: true
console.log(false === 0); // Output: false
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

// penjelasan kenapa hasilnya berbeda 
// 10 == "10" -> true karena angka 10 dianggap sama dengan string "10"
// 10 === "10" -> false karena angka 10 dianggap sama dengan string "10" tetapi tipe datanya berbeda
// true == 0 -> true karena false dianggap sama dengan angka 0
// false === 0 -> false karena false dianggap sama dengan angka 0 tetapi tipe datanya berbeda
// null == undefined -> true karena null dianggap sama dengan undefined
// null === undefined -> false karena null dianggap sama dengan undefined tetapi tipe datanya berbeda