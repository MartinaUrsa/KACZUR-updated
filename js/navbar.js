const navToggle = document.querySelector(".mobile-nav-toggle");
const navbar = document.querySelector(".navbar");
const mainSection = document.querySelector(".main-section");


navToggle.addEventListener('click', () => {
    const visibility = navbar.getAttribute('data-visible');

    if (visibility === 'false') {
        navbar.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true'); // Accesibilidad
    }
    else if (visibility === 'true') {
        navbar.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

mainSection.addEventListener('click', () => {
    const visibility = navbar.getAttribute('data-visible');

    if (visibility === 'true') {
        navbar.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false');
    }
});