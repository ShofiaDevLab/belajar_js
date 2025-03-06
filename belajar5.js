// materi switch case
// switch (ekspresi) {
//   case "nilai1":
//     aksi1;
//     break;
//   case "nilai2":
//     aksi2;
//     break;
//   case "nilain":
//     aksin;
//     break;
//   default:
//     break;
// }

// contoh switch case
var angka = "kontol";
switch (angka % 2) {
  case 0:
    console.log(angka + ' adalah bilangan genap');
    break;
  case 1:
    console.log(angka + ' adalah bilangan ganjil');
    break;
  default:
    console.log(angka + ' adalah bukan angka');
    break;
}