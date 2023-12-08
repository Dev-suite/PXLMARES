document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('icon');
    const closeIcon = document.getElementById('close-icon');
    const sideMenu = document.querySelector('.side-menu');

    icon.addEventListener('click', function () {
        sideMenu.style.width = '250px';
    });

    closeIcon.addEventListener('click', function () {
        sideMenu.style.width = '0';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navContent = document.querySelector('.nav-content');

    hamburgerMenu.addEventListener('click', function () {
        navContent.classList.toggle('active');
    });
});







