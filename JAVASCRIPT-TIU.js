
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
  
     
      document.querySelectorAll('section').forEach((section) => {
        section.classList.remove('active');
      });
  
      
      document.querySelector(target).classList.add('active');
  
      // Scroll to the target section with smooth animation
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  });
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
  
      // Remove active class from all nav items
      document.querySelectorAll('nav li').forEach((navItem) => {
        navItem.classList.remove('active');
      });
  
      // Add active class to the current nav item
      e.target.parentNode.classList.add('active');
  
      // Scroll to the target section with smooth animation
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  });