const kalimat = "JavaScript itu seru. Saya suka JavaScript.";
const kata = "JavaScript";
const kataBaru = "TypeScript";
const kalimatBaru = kalimat.replace(kata, kataBaru);
console.log(kalimatBaru);

const kalimatBaru2 = kalimat.replaceAll(kata, kataBaru);
console.log(kalimatBaru2);