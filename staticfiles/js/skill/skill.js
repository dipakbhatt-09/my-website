document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-level');

    // Function to animate skill bars
    function animateSkills() {
        const triggerBottom = window.innerHeight * 0.9;

        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if(skillTop < triggerBottom){
                skill.style.width = skill.dataset.width || skill.style.width; 
            } else {
                skill.style.width = '0%'; //  reset when scrolled out
            }
        });
    }

    // Store original widths in data attribute for reset
    skills.forEach(skill => {
        skill.dataset.width = skill.style.width;
        skill.style.width = '0%';
    });

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // call on load

    //  hover effect
    skills.forEach(skill => {
        skill.parentElement.addEventListener('mouseenter', () => {
            skill.style.filter = 'brightness(1.2)';
            skill.style.transition = '0.3s';
        });
        skill.parentElement.addEventListener('mouseleave', () => {
            skill.style.filter = 'brightness(1)';
        });
    });

    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target){
                target.scrollIntoView({behavior:'smooth'});
            }
        });
    });
});



