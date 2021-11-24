var pesertaLomba = [
  ["Budi", "Pria", "172cm"],
  ["Susi", "Wanita", "162cm"],
  ["Lala", "Wanita", "155cm"],
  ["Agung", "Pria", "175cm"],
];
let nama = [];
let namaPeserta = pesertaLomba.map(function (data) {
  return data[0];
});
let jenisKelaminPeserta = pesertaLomba.map(function (data) {
  return data[1];
});
let tinggiPeserta = pesertaLomba.map(function (data) {
  return data[2];
});

let dataPesertaLomba = [
  {
    nama: namaPeserta[0],
    "jenis kelamin": jenisKelaminPeserta[0],
    tinggi: tinggiPeserta[0],
  },
  {
    nama: namaPeserta[1],
    "jenis kelamin": jenisKelaminPeserta[1],
    tinggi: tinggiPeserta[1],
  },
  {
    nama: namaPeserta[2],
    "jenis kelamin": jenisKelaminPeserta[2],
    tinggi: tinggiPeserta[2],
  },
  {
    nama: namaPeserta[3],
    "jenis kelamin": jenisKelaminPeserta[3],
    tinggi: tinggiPeserta[3],
  },
];

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];
console.log(dataPesertaLomba);
console.log(persons);
