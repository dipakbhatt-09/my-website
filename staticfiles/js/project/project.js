document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    // SCROLL REVEAL
    function revealProjects() {
        const triggerBottom = window.innerHeight * 0.9;

        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom){
                card.classList.add('show');
            } else {
                card.classList.remove('show'); // hide when scrolled out
            }
        });
    }

    window.addEventListener('scroll', revealProjects);
    revealProjects(); // initial call on load

    //  subtle hover glow 
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 40px rgba(255, 76, 0, 0.6)';
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.transition = '0.4s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
            card.style.transform = 'translateY(-12px)'; // keep base CSS hover
        });
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




