const img = document.querySelector(".content .kado");
const kata = document.querySelector(".content .kata");
const button = document.querySelectorAll(".content button");
const ctn = document.querySelector(".content");
let counter = 0;  // Penghitung pengulangan

// Function untuk menangani klik tombol pilihan
function clik(btn) {
  // Mengubah gambar sesuai pilihan
  btn.textContent == "iya" ? img.src = "img/malu.gif" : img.src = "img/patahHati.gif";
  
  // Sembunyikan tombol setelah dipilih
  button[0].style.display = "none";
  button[1].style.display = "none";
  
  // Sesuaikan ukuran konten
  ctn.style.height = "250px";
  ctn.style.width = "270px";
  
  // Ubah teks sesuai pilihan
  kata.textContent = btn.textContent == "iya" ? "uuu jadi sayang dehhh" : "kok kamu gitu si sama aku";

  // Menambahkan timeout untuk memunculkan pilihan lagi atau menampilkan pesan terima kasih
  setTimeout(() => {
    if (counter < 1) {  // Cek apakah sudah dua kali
      ulangi();
      counter++;  // Tambah penghitung
    } else {
      akhir();  // Menampilkan pesan terima kasih setelah dua kali pengulangan
    }
  }, 2000);  // Ulangi setelah 2 detik
}

// Function untuk mengembalikan ke kondisi awal dan memungkinkan untuk memilih lagi
function ulangi() {
  // Reset gambar ke gambar awal
  img.src = "img/kaku.webp";  // Gambar default
  
  // Reset teks dan tombol
  kata.textContent = "Pilih lagi, iya atau tidak?";
  button[0].style.display = "inline-block";
  button[1].style.display = "inline-block";
  
  // Kembalikan ukuran konten
  ctn.style.height = "400px";
  ctn.style.width = "300px";
}

// Function untuk menampilkan pesan akhir setelah dua kali pengulangan
function akhir() {
  // Tampilkan pesan terima kasih dan sembunyikan tombol
  kata.textContent = "Terima kasih Sayang ku";
  img.src = "img/sedihLaki.webp";  // Bisa menambahkan gambar terima kasih atau membiarkan kosong
  button[0].style.display = "none";
  button[1].style.display = "none";
  
  // Sesuaikan ukuran konten
  ctn.style.height = "250px";
  ctn.style.width = "270px";
}

// Function untuk inisiasi konten
function content() {
  ctn.style.width = "300px";
  ctn.style.height = "400px";
  ctn.style.borderRadius = "5px";
  kata.textContent = "gimana kabar hari ini baik?";
}

function pesanHilang() {
  const divpesan = document.querySelector("div.pesan");
  divpesan.style.display = "none";
  content();
  fullLayar();
  musik();
}

function fullLayar() {
  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

setTimeout(() => {
  const span = document.querySelector("div.pesan span");
  span.style.opacity = ".2";
  musik();
}, 1000);

function musik() {
  const msk = document.getElementById("lagu");
  msk.play();
  msk.loop = true;
}

setInterval(musik, 147000);
