// Handles mobile navbar toggle & active link

document.addEventListener("DOMContentLoaded", () => {

  // Select menu button and nav links
  const menuBtn = document.querySelector(".menu-btn"); // ☰ button
  const navLinks = document.querySelector(".nav-links"); // nav container
  const links = document.querySelectorAll(".nav-links a"); // all nav links

  // Safety check
  if (!menuBtn || !navLinks) return;

  // Mobile navbar toggle
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // show/hide
  });

  // Close mobile menu when a nav link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active"); // hide menu
    });
  });

  // Highlight active link based on current page
  const currentPage = window.location.pathname;
  links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add("active-link"); // CSS handles styling
    }
  });

});
