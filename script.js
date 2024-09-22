const menuToggle = document.getElementById('menu-toggle');
const pinnedNav = document.getElementById('pinned-nav');
const menuLinks = document.querySelectorAll('.menu-link');

// Toggle the navigation menu
menuToggle.addEventListener('click', () => {
    pinnedNav.classList.toggle('show');
});

// Close the navigation when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        pinnedNav.classList.remove('show');
    });
});

// Fade-in animations using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Stop observing once animation is applied
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Hide the loader when the page is fully loaded
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});
