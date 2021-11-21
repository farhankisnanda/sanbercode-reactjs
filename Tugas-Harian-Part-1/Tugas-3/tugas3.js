// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
kataKeduaBaru = kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1);
kataKetigaBaru = kataKetiga.substr(0, 6) + kataKetiga.charAt(6).toUpperCase();
console.log(
  kataPertama +
    " " +
    kataKeduaBaru +
    " " +
    kataKetigaBaru +
    " " +
    kataKeempat.toUpperCase()
);

//Soal 2
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let ppj = parseInt(panjangPersegiPanjang);
let lpp = parseInt(lebarPersegiPanjang);

let alasSegitiga = "6";
let tinggiSegitiga = "7";

let as = parseInt(alasSegitiga);
let ts = parseInt(tinggiSegitiga);

let kelilingPersegiPanjang = ppj * 2 + lpp * 2;
let luasSegitiga = (as * ts) / 2;

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

// Atau bisa menggunakan ini yang lebih "DRY"
//Soal 2
// let panjangPersegiPanjang = "8";
// let lebarPersegiPanjang = "5";

// let alasSegitiga= "6";
// let tinggiSegitiga = "7";

// function jadiNomor (nilai) {
//   return parseInt(nilai);
// }

// function kelilingPersegiPanjang (panjang, lebar) {
//   return panjang*2 + lebar*2;
// }

// function luasSegittiga (alas, tinggi) {
//   return alas*tinggi/2;
// }

// console.log(luasSegittiga(alasSegitiga, tinggiSegitiga));
// console.log(kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));

// Soal 3

let sentences = "wah javascript itu keren sekali";
let firstWord = sentences.substring(0, 3);
let secondWord = sentences.substring(4, 14);
let thirdWord = sentences.substring(15, 18);
let fourthWord = sentences.substring(19, 24);
let fifthWord = sentences.substring(25);

console.log("Kata Pertama: " + firstWord);
console.log("Kata Kedua: " + secondWord);
console.log("Kata Ketiga: " + thirdWord);
console.log("Kata Keempat: " + fourthWord);
console.log("Kata Kelima: " + fifthWord);

// Cara lain
// function pisahKalimat (kalimat, a, b, c) {
//   return 'Kata ' + c + ": " + kalimat.substring(a,b);
// }

// console.log(pisahKalimat(sentences,0, 3, "Pertama"));

// Soal 4
let nilaiJohn = 80;
let nilaiDoe = 50;

let nilai = nilaiJohn;
// let nilai = nilaiDoe;
if (nilai >= 80) {
  console.log("Indeksnya A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Indeksnya B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Indeksnya C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("Indeksnya D");
} else if (nilai < 50) {
  console.log("Indeksnya E");
} else {
  console.log("Nilai salah input");
}

// Soal 5
let tanggal = 29;
let bulan = 1;
let tahun = 2001;

switch (bulan) {
  case 1:
    console.log(tanggal + " Januari " + tahun);
    break;
  case 2:
    console.log(tanggal + " Februar " + tahun);
    break;
  case 3:
    console.log(tanggal + " Maret " + tahun);
    break;
  case 4:
    console.log(tanggal + " April " + tahun);
    break;
  case 5:
    console.log(tanggal + " Mei " + tahun);
    break;
  case 6:
    console.log(tanggal + " Juni " + tahun);
    break;
  case 7:
    console.log(tanggal + " Juli " + tahun);
    break;
  case 8:
    console.log(tanggal + " Agustus " + tahun);
    break;
  case 9:
    console.log(tanggal + " September " + tahun);
    break;
  case 10:
    console.log(tanggal + " Oktober " + tahun);
    break;
  case 11:
    console.log(tanggal + " November " + tahun);
    break;
  case 12:
    console.log(tanggal + " Desember " + tahun);
    break;

  default:
    console.log("Kamu salah memasukkan bulan");
}
