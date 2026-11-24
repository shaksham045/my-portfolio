const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "Dark Mode";
    } else {
        themeBtn.textContent = "Light Mode";
    }
});
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});
const words = [
    "CSE Student",
    "Web Developer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector("#typing");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1000;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();