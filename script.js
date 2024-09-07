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
