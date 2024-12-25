// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// Burger Menu Toggle
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

burgerMenu.addEventListener('click', () => {
    navLinks.querySelector('ul').classList.toggle('show');
});

// Smooth Scroll Functionality
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.navbar', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
gsap.from('.content-section', {
    scrollTrigger: {
        trigger: '.content-section',
        start: 'top 80%',
    },
    opacity: 0,
    duration: 1.5,
    y: 50,
    stagger: 0.3,
});
