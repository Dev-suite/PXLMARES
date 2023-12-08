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

// Add this JavaScript to your script.js

// Add this JavaScript to your script.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleThemeButton');
    const body = document.body;
    const themeImage = document.getElementById('themeImage');

    toggleButton.addEventListener('click', function () {
        // Toggle between different themes
        if (body.classList.contains('theme-light')) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            themeImage.src = './images/b6d0c197-6d6a-4f76-aba2-394b4c60638e.png';
        } else if (body.classList.contains('theme-dark')) {
            body.classList.remove('theme-dark');
            body.classList.add('theme-colorful');
            themeImage.src = './images/65fd7d9e-e2f3-45e0-8629-d8469e037281.png';
        } else if (body.classList.contains('theme-colorful')) {
            body.classList.remove('theme-colorful');
            body.classList.add('theme-contrast');
            themeImage.src = './images/d42c4a4d-3265-4f24-9af4-2e41b279ed86.png';
        } else {
            body.classList.remove('theme-contrast');
            body.classList.add('theme-light');
            themeImage.src = './images/3cd803a5-2129-4086-a276-8f46eddf67ef.png';
        }
    });
});




// Add this JavaScript to your script.js

document.addEventListener('DOMContentLoaded', function () {
    const revealImage = document.querySelector('.reveal-image');

    // Set a delay (in milliseconds) before adding the 'revealed' class
    const delay = 1000; // 1000 milliseconds = 1 second

    setTimeout(function () {
        revealImage.classList.add('revealed');
    }, delay);
});
