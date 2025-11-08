// ======================================
// 1. Menú de Hamburguesa
// ======================================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

// Alterna la clase 'active' en la navegación al hacer clic en el botón
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Opcional: Cambiar el icono del botón al abrir/cerrar
    if (nav.classList.contains('active')) {
        menuToggle.innerHTML = '&#10005;'; // Símbolo 'X'
    } else {
        menuToggle.innerHTML = '&#9776;'; // Símbolo de hamburguesa
    }
});

// Cierra el menú si se hace clic en un enlace
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Solo cierra si el menú está activo
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.innerHTML = '&#9776;'; // Asegura que el icono vuelva a ser hamburguesa
        }
    });
});


// ======================================
// 2. Animación de Elementos al Entrar en la Vista (Intersection Observer)
// ======================================

// Elementos a animar: Hero, títulos principales y secciones (usando las clases de style.css)
const animatedElements = document.querySelectorAll(
    '.hero, .titulo, .seccion, .contenedor-elegirnos, .contenedor-destacado, footer'
);

// Opciones del observador
const observerOptions = {
    root: null, // el viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% del elemento visible para activar
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si el elemento está intersectando (visible)
        if (entry.isIntersecting) {
            // Añadir la clase para activar la animación CSS
            entry.target.classList.add('is-visible');
            // Dejar de observar el elemento, ya que solo necesitamos la animación una vez
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar el observador a cada elemento
animatedElements.forEach(element => {
    observer.observe(element);
});