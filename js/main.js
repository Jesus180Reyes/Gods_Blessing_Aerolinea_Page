let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}


document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
});


$(function() {
    $('#myDiv').floatingWhatsApp({
        phone: '+504 9907 8813',

        showPopup: true,
        position: 'right',
        popupMessage: 'Hola!, ¿En que te puedo ayudar?',
        message: 'Hola quiero cotizar un viaje!',
        headerTilte: 'Bienvenido',
        autoOpenTimeout: 7000,
        size: '60px',
        showOnIE: false,
    });
});


var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = 'none';
});
// $(window).on("preloader", function() {
//     $("load").fadeOut("slow");
// });