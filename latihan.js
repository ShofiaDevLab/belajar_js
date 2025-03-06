// latihan perulangan while, for, if else dari kasus sebelumya

// kasus pertama semua angkot beroperasi dengan baik
var noAngkot = 1;
var jumlahAngkot = 10;

// while (noAngkot <= jumlahAngkot) {
//   console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
//   noAngkot++;
// }

// kasus kedua menggunakan while untuk beroperasi dan for untuk yang tidak beroperasi

// while (noAngkot <= 6) {
//   console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
//   noAngkot++;
// }
// for (noAngkot = 6 + 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " Tidak Beroperasi Dengan Baik");
// }

// kasus ketiga menggunakna for if else
// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
//   if (noAngkot <= 6) {
//     console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
//   } else {
//     console.log("Angkot No. " + noAngkot + " Tidak Beroperasi Dengan Baik");
//   }
// }

// kasus keempat no angkot 8 lembur
// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
//   if (noAngkot <= 6) {
//     console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
//   } else if (noAngkot === 8 ) {
//      console.log("Angkot No. " + noAngkot + " Sedang Lembur");
//   }else {
//     console.log("Angkot No. " + noAngkot + " Tidak Beroperasi Dengan Baik");
//   }
// }

// kasus kelima no angkot 8 dan 10 lembur
// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
//   if (noAngkot <= 6) {
//     console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
//   } else if (noAngkot === 8 || noAngkot === 10 ) {
//      console.log("Angkot No. " + noAngkot + " Sedang Lembur");
//   }else {
//     console.log("Angkot No. " + noAngkot + " Tidak Beroperasi Dengan Baik");
//   }
// }

// kasus keenam noangkot 8 dan 10 dan 3 lembur 
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
  if (noAngkot <= 6 && noAngkot !== 3) {
    console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
  }else if (noAngkot === 8 || noAngkot === 3 ) {
     console.log("Angkot No. " + noAngkot + " Sedang Lembur");
  }else {
    console.log("Angkot No. " + noAngkot + " Tidak Beroperasi Dengan Baik");
  }
}

