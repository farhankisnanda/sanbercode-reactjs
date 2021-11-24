function luasBangunDatar(bangunDatar, a, b) {
  if (bangunDatar == "lingkaran") {
    return (22 / 7) * a * a;
  } else if (bangunDatar == "segitiga") {
    return (1 / 2) * a * b;
  } else if (bangunDatar == "persegi") {
    return a * a;
  } else {
    return "Belum memiliki rumus";
  }
}

console.log(luasBangunDatar("lingkaran", 7));
console.log(luasBangunDatar("segitiga", 2, 3));
console.log(luasBangunDatar("persegi", 2));
console.log(luasBangunDatar("trapesium", 2, 4));
