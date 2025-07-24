const navigasi = document.querySelector ('.navigasi'); 
// keetika di klik
document.querySelector('#menu').onclick = () => {
    navigasi.classList.toggle('active');
};
// klik di luar untuk tutup menu
const menu = document.querySelector('#menu')

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navigasi.contains(e.target)) {
        navigasi.classList.remove('active')
    }
})