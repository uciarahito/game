// Jual barang pada TUKANG BOTOT, dan dapatkan pointnya

var namaHari = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
var namaBulan = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
var hargaRand = Math.floor(Math.random() * 70) + 30;
var hargaJual = 0;
var welcome = "Selamat datang di BOTOT!";
var teks1 = "Saya adalah tukang botot pada sesi ini.\nMasukkan barang bekas anda dan kumpulkan poinnya.";

function TukangBotot(nama, umur) {
  this.nama   = nama;
  this.umur   = umur;
  this.hello  = function() {
    alert(welcome+'\nNama saya '+this.nama+', umur '+this.umur+'\n'+teks1);
  }
}

var kurir = new TukangBotot('Tono', 44);
function pembuka() {
  kurir.hello();
}

function show_hari()
{
  var sekarang = new Date();
  var hariIni = namaHari[sekarang.getDay()];
  var bulanIni = namaBulan[sekarang.getMonth()];
  var tglSekarang = sekarang.getDate();
  var tahunIni = sekarang.getFullYear();
  console.log(hariIni + ", " + tglSekarang + " " + bulanIni + " " + tahunIni);
}

var total = 0;
var i = 0;
var jenisBotot = ["botol kaca","buku bekas","botol plastik","besi","seng"];
var step = ["Step 1", "Step 2", "Step 3"]
var pointRand = Math.floor(Math.random() * 70) + 30;
var cek = new jenisBrg("besi");
function jenisBrg(string) {
  this.string = string;
  this.type = function(randomValue){
    for (var j = 0; j < step.length; j++){
      for (var i = 0; i < jenisBotot.length; i++) {
        if (this.string !== jenisBotot[i]){
          console.log(step[j]+": Botot anda tidak laku!");
        } else {
          console.log(step[j]+": Point botot "+this.string+" adalah : "+randomValue);
          total = total + randomValue;
        }
      }
    }
    console.log("Total point Anda : "+total);
  }
}

pembuka();
show_hari();
cek.type(pointRand);