let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = ()=> {
    navbar.classList.toggle('active');
}


document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
});


$(function () {
    $('#myDiv').floatingWhatsApp({
        phone: '+504 9907 8813',
        
        showPopup: true,
        position: 'right',
        popupMessage: 'Hola, En que te puedo Ayudar',
      message: 'Hola queria cotizar un viaje!',
      headerTilte: 'Bienvenido',
      autoOpenTimeout: 7000,
      size: '60px',
      showOnIE: false,
    });
  });
