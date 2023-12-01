document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const menu = document.getElementById("menu");

    function toggleMenu() {
        burgerMenu.classList.toggle("open");
        menu.classList.toggle("show");
    }

    burgerMenu.addEventListener("click", toggleMenu);
});

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        window.location.href = 'Success.html';
    } else {
        alert('Please fill in both username and password fields.');
    }
};

function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    const storedUsername = sessionStorage.getItem('username');
    const storedPassword = sessionStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        window.location.href = 'Home.html';
    } else {
        alert('Invalid username or password.');
    }
};