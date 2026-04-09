// home.js

document.addEventListener('DOMContentLoaded', () => {
    // HERO IMAGE MOUSEMOVE EFFECT
    const heroImg = document.querySelector('.profile-img');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 20;
        const y = (window.innerHeight / 2 - e.pageY) / 20;
        heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    });
    document.addEventListener('mouseout', () => {
        heroImg.style.transform = 'scale(1)';
    });

    // HERO TEXT FADE-IN
    const heroText = document.querySelector('.hero-text');
    setTimeout(() => {
        heroText.classList.add('show');
    }, 300);

    // SKILL CARDS SCROLL REVEAL
    const skills = document.querySelectorAll('.skill-card');
    function revealSkills() {
        const triggerBottom = window.innerHeight * 0.9;
        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if(skillTop < triggerBottom){
                skill.classList.add('show');
            } else {
                skill.classList.remove('show');
            }
        });
    }
    window.addEventListener('scroll', revealSkills);
    revealSkills(); // call on load

    // PROJECTS HOVER EFFECT 
    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(-15px) scale(1.05)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateY(0) scale(1)';
        });
    });

    // SMOOTH SCROLL FOR ANCHOR LINKS
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({behavior: 'smooth'});
        });
    });
});

