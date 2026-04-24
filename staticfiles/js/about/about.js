document.addEventListener('DOMContentLoaded', () => {
    const aboutText = document.querySelector('.about-content');
    const aboutImg = document.querySelector('.about-image img');

    // SCROLL REVEAL FOR TEXT
    function revealText() {
        if(!aboutText) return;
        const triggerBottom = window.innerHeight * 0.9;
        const textTop = aboutText.getBoundingClientRect().top;

        if(textTop < triggerBottom) {
            aboutText.classList.add('show');
        }
    }

    // SCROLL REVEAL FOR IMAGE
    function revealImage() {
        if(!aboutImg) return;
        const triggerBottom = window.innerHeight * 0.9;
        const imgTop = aboutImg.getBoundingClientRect().top;

        if(imgTop < triggerBottom) {
            aboutImg.classList.add('show');
        }
    }

    window.addEventListener('scroll', () => {
        revealText();
        revealImage();
    });

    // INITIAL CALL
    revealText();
    revealImage();

    // IMAGE HOVER ZOOM
    if(aboutImg){
        aboutImg.addEventListener('mouseenter', () => {
            aboutImg.style.transform = 'scale(1.05)';
            aboutImg.style.transition = '0.4s';
        });
        aboutImg.addEventListener('mouseleave', () => {
            aboutImg.style.transform = 'scale(1)';
        });
    }

    //   INTERNAL LINKS SMOOTH SCROLL GARNA KO LAGI
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

