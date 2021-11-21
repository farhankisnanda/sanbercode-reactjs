// Soal 1
let i = 2;
let j = 20;

console.log("LOOPING PERTAMA");
while (i <= 20) {
  console.log([i] + " - I love coding");
  i += 2;
}

console.log("LOOPING KEDUA");
while (j >= 2) {
  console.log([j] + " - I will become a frontend developer");
  j -= 2;
}

// Soal 2

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log([i] + " - I Love Coding");
  } else if (i % 2 == 0) {
    console.log([i] + " - Berkualitas");
  } else {
    console.log([i] + " - Santai");
  }
}

// Soal 3
for (let i = 1; i < 8; i++) {
  let s = "";
  for (let j = 0; j < i; j++) {
    s += "#";
  }
  console.log(s);
}

// atau menggunakan ini
function segitigaSiku(panjang) {
  let hasil = "";
  for (let i = 1; i <= panjang; i++) {
    for (let j = 0; j < i; j++) {
      hasil += "#";
    }
    hasil += "\n";
  }
  return hasil;
}

console.log(segitigaSiku(6));

// Soal 4
let kalimat = [
  "aku",
  "saya",
  "sangat",
  "sangat",
  "senang",
  "belajar",
  "javascript",
];

kalimat.shift();
kalimat.splice(2, 1);
let hubungkanKalimat = kalimat.join(" ");
console.log(hubungkanKalimat);

// Soal 5

let sayuran = [];
sayuran.push(
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge"
);
sayuran.sort();

for (i = 0; i < sayuran.length; i++) {
  console.log(i + 1 + ". " + sayuran[i]);
}
