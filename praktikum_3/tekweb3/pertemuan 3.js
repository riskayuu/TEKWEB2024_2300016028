const ubahWarnaBtn = document.getElementById('ubahWarna');
const ubahUkuranFontInput = document.getElementById('ubahUkuranFont');
const ubahModeBtn = document.getElementById('ubahMode');
const ubahGayaFontBtn = document.getElementById('ubahGayaFont');
const body = document.body;

// Daftar warna yang akan diubah
const warnaList = ['purple', 'yellow', 'aqua', 'fuchsia', 'pink', 'grey', 'lightblue'];
let warnaIndex = 0;

// Daftar font yang akan diubah
const fontList = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 'Arial', 'Verdana'];
let fontIndex = 0;

// Fungsi untuk mengubah warna latar belakang secara berurutan
ubahWarnaBtn.addEventListener('click', () => {
    body.style.backgroundColor = warnaList[warnaIndex];
    warnaIndex = (warnaIndex + 1) % warnaList.length; // Update indeks warna ke yang berikutnya
});

// Fungsi untuk mengubah ukuran font
ubahUkuranFontInput.addEventListener('input', () => {
    body.style.fontSize = ubahUkuranFontInput.value + 'px';
});

// Fungsi untuk mengubah mode gelap
ubahModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Fungsi untuk mengubah gaya font secara berurutan
ubahGayaFontBtn.addEventListener('click', () => {
    body.style.fontFamily = fontList[fontIndex];
    fontIndex = (fontIndex + 1) % fontList.length; // Update indeks font ke yang berikutnya
});