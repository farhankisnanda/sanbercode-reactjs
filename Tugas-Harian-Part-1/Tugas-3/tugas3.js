// Soal 1
let kataPertama = "saya";
let kataKedua = "senang";
let kataKetiga = "belajar";
let kataKeempat = "javascript";

console.log(`${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`);

// Soal 2
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let alasSegitiga = "6";
let tinggiSegitiga = "7";

const kelilingPersegiPanjang =
  2 * parseInt(panjangPersegiPanjang) + 2 * parseInt(lebarPersegiPanjang);
const luasSegitiga =
  (1 / 2) * parseInt(alasSegitiga) * parseInt(tinggiSegitiga);

console.log(`${kelilingPersegiPanjang} ${luasSegitiga}`);

// Soal 3
let sentences = `wah javascript itu keren sekali`;
const kalimatBaru = sentences.split(" ");
console.log(kalimatBaru);
const [firstWord, secondWord, thirdWord, fourthWord, fifthWord] = kalimatBaru

console.log(`Kata Pertama: ${firstWord} \nKata Kedua: ${secondWord} \nKata Ketiga: ${thirdWord} \nKata Keempat: ${fourthWord} \nKata Kelima: ${fifthWord}`);

// Soal 4
let nilaiJohn;
let nilaiDoe = 50;

if(nilaiJohn || nilaiDoe >= 80) {
  if (nilaiJohn) {
    console.log(`Nilai Joe A`)
  } else {
    console.log(`Nilai Doe A`)
  }
}else if((nilaiJohn || nilaiDoe)>= 70 && (nilaiJohn || nilaiDoe) < 80) {
  if(nilaiJohn) {
    console.log(`Nilai John B`)
  } else {
    console.log(`Nilai Doe B`)
  }
}else if((nilaiJohn || nilaiDoe)>= 60 && (nilaiJohn || nilaiDoe) < 70) {
  if(nilaiJohn) {
    console.log(`Nilai John C`)
  } else {
    console.log(`Nilai Doe C`)
  }
}else if((nilaiJohn || nilaiDoe)>= 50 && (nilaiJohn || nilaiDoe) < 60) {
  if(nilaiJohn) {
      console.log(`Nilai John D`)
  } else {
      console.log(`Nilai Doe D`)
  }
}else {
  if(nilaiJohn) {
    console.log(`Nilai John E`)
  } else {
    console.log(`Nilai Doe E`)
  }
}

// Soal 5
let tanggal = 29;
let bulan = 1;
let tahun = 2001

switch (bulan) {
  case 1:
    console.log(`${tanggal} Januari ${tahun}`)
    break;
  case 2:
    console.log(`${tanggal} Februari ${tahun}`)
    break;
  case 3:
    console.log(`${tanggal} Maret ${tahun}`)
    break;
  case 4:
    console.log(`${tanggal} April ${tahun}`)
    break;
  case 5:
    console.log(`${tanggal} Mei ${tahun}`)
    break;
  case 6:
    console.log(`${tanggal} Juni ${tahun}`)
    break;
  default:
    console.log(`Salah memasukkan bulan`)
    break;
}