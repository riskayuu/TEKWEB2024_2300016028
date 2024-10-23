// Elemen-elemen 
const bgColorSelect = document.getElementById('bgColor');
const fontSizeRange = document.getElementById('fontSize');
const darkModeCheckbox = document.getElementById('darkModeSlider');
const fontStyleSelect = document.getElementById('fontStyle');
const body = document.body;

// Mengubah warna background
bgColorSelect.addEventListener('change', function() {
    body.style.backgroundColor = this.value;
});

// Mengubah ukuran font
fontSizeRange.addEventListener('input', function() {
    body.style.fontSize = this.value + 'px';
});

// Dark mode
darkModeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else {
        body.style.backgroundColor = bgColorSelect.value;
        body.style.color = '#000';
    }
});

// Gaya font
fontStyleSelect.addEventListener('change', function() {
    body.style.fontFamily = this.value;
});