const menuToggle = document.getElementById('menu-toggle');
const pinnedNav = document.getElementById('pinned-nav');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    pinnedNav.classList.toggle('show');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        pinnedNav.classList.remove('show');
    });
});
