// Configuración Swiper
let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
});

// Mostrar/ocultar menu
let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu i');
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav__link');

menu,addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('ri-close-large-fill');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuIcon.classList.remove('ri-close-large-fill');
    });
});