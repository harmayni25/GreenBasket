// GreenBasket navbar auto-hide on scroll
const navbar = document.querySelector('.main-navbar'); // safer query
let lastScrollY = window.scrollY;
let ticking = false;

if (navbar) {
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) {
      navbar.classList.remove('hidden');
    }
  });
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
}
