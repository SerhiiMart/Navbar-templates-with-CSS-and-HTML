const navSlide = () =>{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      (link.style.animation) ? link.style.animation = '' : link.style.animation = `navLinkFading 0.6s ease forwards ${index / 7 + 0.5}s`;
      
    });

    // hamburger animation
    hamburger.classList.toggle('toggle');
  });

 
};
navSlide();