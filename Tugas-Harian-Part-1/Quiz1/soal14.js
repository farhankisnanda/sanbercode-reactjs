let daftarNama = [];
function tambahNama(nama, jenisKelamin) {
  if (jenisKelamin == "laki-laki") {
    daftarNama.push({
      nama: nama,
      jenisKelamin: jenisKelamin,
      panggilan: "Bapak",
    });
  } else if (jenisKelamin == "perempuan") {
    daftarNama.push({
      nama: nama,
      jenisKelamin: jenisKelamin,
      panggilan: "Ibu",
    });
  }
}
tambahNama("farhan", "laki-laki");
tambahNama("kisnanda", "laki-laki");
tambahNama("muhammad", "laki-laki");
tambahNama("richo", "laki-laki");
tambahNama("adi", "laki-laki");
let urutanNama = daftarNama.map(function (data) {
  return data.nama;
});

for (let i = 0; i < urutanNama.length; i++) {
  console.log([i + 1] + ". " + urutanNama[i]);
}
