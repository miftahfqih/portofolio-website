
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

    const scrollPosition = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    const parallaxElements = document.querySelectorAll('.parallax');
    const aboutMeSection = document.querySelector('#aboutme');
    const aboutMeOffset = aboutMeSection.offsetTop;

    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    if (scrollPosition >= aboutMeOffset) {
        heroSection.style.opacity = 0;
    } else {
        heroSection.style.opacity = 1;
    }
});

var copy = document.querySelector("#experience .explogo-slide").cloneNode(true);
document.querySelector("#experience .explogo").appendChild(copy)

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});