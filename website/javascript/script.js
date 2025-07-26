window.addEventListener("scroll", function () {
    const header = this.document.getElementById('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let i = 1;
let j = 1;
let isDeleting = false

const words = ["Web Design'", "Front End'", "Let's get in touch!'"]


function typingEffect() {
    const typingEffectID = document.getElementById('typing-effect');
    const currentWord = words[i];

    // Typing phase
    if (!isDeleting) {
        typingEffectID.textContent = currentWord.slice(0, j++);
        if (j > currentWord.length) {
            isDeleting = true;
            setTimeout(typingEffect, 2000); // Pause before deleting
            return;
        }
    }
    // Deleting phase
    else {
        typingEffectID.textContent = currentWord.slice(0, j--);
        if (j < 1) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(typingEffect, isDeleting ? 60 : 100); // speed
}

typingEffect();

const mainBox = document.querySelectorAll('.main-box, .about-box, .contact-box'); // include all relevant sections

mainBox.forEach((content) => {
    window.addEventListener('load', eventListener);
    window.addEventListener('scroll', eventListener);

    function eventListener() {
        let windowHeight = window.innerHeight;
        let sectionRectTop = content.getBoundingClientRect().top;

        if (sectionRectTop < windowHeight - 100) {
            content.classList.add('reveal');
        } else {
            content.classList.remove('reveal');
        }
    }
});