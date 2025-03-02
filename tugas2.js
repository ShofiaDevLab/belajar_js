for (var noAngkot = 1; noAngkot <= 10; noAngkot++){
  if (noAngkot <= 6) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  }else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
  }
}

// atau dengan menggunakan while
var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;
while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}