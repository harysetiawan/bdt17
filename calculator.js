var calculator = {
  tambah : function(a,b){
    return a+b;
  },
  kurang : function(a,b){
    return a-b;
  },
  kali : function(a,b){
    return a*b;
  },
  samadengan : function(a,b){
    //Jika a > b
    if(a>b){
      return a+' lebih besar dari '+b;
    }
    if(a<b){
      return a+' lebih kecil dai '+b;
    }
  }
};
var bil1 = 7;
var bil2 = 5;

var jumlah = "Hasil "+bil1+" + "+bil2+" = "+calculator.tambah(bil1,bil2);
var kurang = "Hasil "+bil1+" - "+bil2+" = "+calculator.kurang(bil1,bil2);
var kali = "Hasil "+bil1+" x "+bil2+" = "+calculator.kali(bil1,bil2);
var samadengan = "Hasil perbandingan antara "+bil1+" dengan "+bil2+" = "+calculator.samadengan(bil1,bil2);
  console.log(jumlah);
  console.log(kurang);
  console.log(kali);
  console.log(samadengan);
