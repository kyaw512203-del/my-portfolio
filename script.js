
/* =========================================
   1. TYPING ANIMATION
========================================= */

const typingElement = document.querySelector(
    ".home-content h2 span"
);

const words = [
    "Software Developer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === currentWord.length) {

        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

if (typingElement) {
    typeEffect();
}


/* =========================================
   2. SCROLL REVEAL ANIMATION
========================================= */


const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-details, .skill-card, .project-card, .contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});



/* =========================================
   5. WELCOME MESSAGE
========================================= */

console.log(
    "Welcome to Kyaw Soe's Developer Portfolio!"
);

console.log(
    "Portfolio JavaScript loaded successfully."
);


// Active Navigation Link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


 // Back to Top Button
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

