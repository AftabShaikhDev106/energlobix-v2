document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const slideInterval = 5000; // 5 seconds

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, slideInterval);
});

// document.addEventListener("DOMContentLoaded", function() {
//     const heroSection = document.querySelector('.hero-section');
//     const images = [
//         'assets/images/shutterstock_2168518333.jpg',
//         'assets/images/shutterstock_274681841.jpg',
//         // 'assets/images/image4.jpg',
//         // 'assets/images/image5.jpg'
//     ];

//     let currentIndex = 0;

//     function changeBackground() {
//         heroSection.classList.remove('fade-in');
//         setTimeout(() => {
//             heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
//             heroSection.classList.add('fade-in');
//             currentIndex = (currentIndex + 1) % images.length;
//         }, 50); // Small delay to trigger reflow and ensure animation
//     }

//     setInterval(changeBackground, 5000);
//     changeBackground(); // Initial call to set the first image
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const heroSection = document.querySelector('.hero-section');
//     const images = [
//         'assets/images/shutterstock_2168518333.jpg',
//         'assets/images/shutterstock_274681841.jpg',
//         // 'assets/images/image3.jpg',
//         // 'assets/images/image4.jpg',
//         // 'assets/images/image5.jpg'
//     ];

//     let currentIndex = 0;
//     let nextIndex = 1;

//     function changeBackground() {
//         const before = getComputedStyle(heroSection, '::before');
//         const after = getComputedStyle(heroSection, '::after');

//         if (before.getPropertyValue('opacity') == 1) {
//             heroSection.style.setProperty('--before-image', `url(${images[nextIndex]})`);
//             heroSection.style.setProperty('--after-image', `url(${images[currentIndex]})`);
//             heroSection.querySelector('::before').style.opacity = '0';
//             heroSection.querySelector('::after').style.opacity = '1';
//         } else {
//             heroSection.style.setProperty('--after-image', `url(${images[nextIndex]})`);
//             heroSection.style.setProperty('--before-image', `url(${images[currentIndex]})`);
//             heroSection.querySelector('::before').style.opacity = '1';
//             heroSection.querySelector('::after').style.opacity = '0';
//         }

//         currentIndex = (currentIndex + 1) % images.length;
//         nextIndex = (nextIndex + 1) % images.length;
//     }

//     setInterval(changeBackground, 5000);
//     changeBackground(); // Initial call to set the first image
// });

// Robust Menu Toggle and Accordion Logic
function initNavigationMenu() {
  const openBtn = document.getElementById("open-menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const closeBtn = document.getElementById("close-menu-btn");

  if (!openBtn || !navMenu) return;

  // Prevent duplicate listener binding
  if (openBtn.dataset.bound) return;
  openBtn.dataset.bound = "true";

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    navMenu.classList.toggle("active");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.remove("active");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !openBtn.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });
}

function initSubmenuAccordion() {
  const submenuToggles = document.querySelectorAll(".toggle-submenu");
  submenuToggles.forEach(toggle => {
    if (toggle.dataset.bound) return;
    toggle.dataset.bound = "true";

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentLi = toggle.closest(".has-submenu");
      const submenu = parentLi.querySelector(".nav-submenu");
      
      // Close other submenus first (accordion behavior)
      document.querySelectorAll(".nav-submenu").forEach(sub => {
        if (sub !== submenu) sub.classList.remove("open");
      });
      document.querySelectorAll(".has-submenu").forEach(li => {
        if (li !== parentLi) li.classList.remove("active");
      });
      
      submenu.classList.toggle("open");
      parentLi.classList.toggle("active");
    });
  });
}

// Initialize instantly
initNavigationMenu();
initSubmenuAccordion();

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initNavigationMenu();
  initSubmenuAccordion();
});

// Initialize on Window Load
window.addEventListener("load", () => {
  initNavigationMenu();
  initSubmenuAccordion();
});

let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (backToTopBtn) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
}

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
