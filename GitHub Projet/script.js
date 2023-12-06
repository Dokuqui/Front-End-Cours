document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const menu = document.getElementById("menu");

    function toggleMenu() {
        burgerMenu.classList.toggle("open");
        menu.classList.toggle("show");
    }

    burgerMenu.addEventListener("click", toggleMenu);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoSlides() {
    plusSlides(1);
}

setInterval(autoSlides, 6000);

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