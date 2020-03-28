const sMerah = document.querySelector('input[name=sliderMerah]');
const sHijau = document.querySelector('input[name=sliderHijau]');
const sBiru = document.querySelector('input[name=sliderBiru]');
const kotakWarna = document.getElementById('kotak');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    kotakWarna.style.backgroundColor = 'rgb('+ r +',' + g +',' + b +')';
})

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    kotakWarna.style.backgroundColor = 'rgb('+ r +',' + g +',' + b +')';
})

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    kotakWarna.style.backgroundColor = 'rgb('+ r +',' + g +',' + b +')';
})


const tWarna = document.getElementById('tombolWarna');
tWarna.addEventListener('click', function(){
    confirm('Apakah kamu sudah yakin dengan pilihan warnamu?');
    alert('Terima kasih sudah memilih warna.');
});

