document.addEventListener('DOMContentLoaded', () => {
    const contactElements = document.querySelectorAll('.contact-info, .contact-form');

    // SCROLL REVEAL
    function revealContact() {
        const triggerBottom = window.innerHeight * 0.9;

        contactElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if(elTop < triggerBottom){
                el.classList.add('show');
            } else {
                el.classList.remove('show'); // hide when scrolled out
            }
        });
    }

    window.addEventListener('scroll', revealContact);
    revealContact(); // initial call on load

    // INPUT FOCUS EFFECT
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.border = '2px solid #ff4c00';
            input.style.transition = '0.3s';
        });
        input.addEventListener('blur', () => {
            input.style.border = 'none';
        });
    });

    // BUTTON HOVER EFFECT
    const button = document.querySelector('.contact-form button');
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 0 15px rgba(255,76,0,0.7)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = '';
    });

    // SMOOTH SCROLL for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target){
                target.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
});




console.log("contact");