// --- Language Switcher ---
const translations = {
  en: {
    // Nav
    navHome: "Home",
    navAbout: "About Us",
    navDrones: "Our Drones",
    navContact: "Contact Us",
    // Hero Section (index.html)
    heroTitle1: "Millenium Drones",
    heroTitle2: "Elevate Your Perspective",
    heroDescription: "Discover the next generation of autonomous aerial solutions. Precision engineering, cutting-edge technology, and unparalleled performance for every mission.",
    heroBtnExplore: "Explore Drones",
    heroBtnLearnMore: "Learn More",
    // Common
    footerRights: "Millenium Drones. All rights reserved.",
    footerSlogan: "Pioneering the Future of Aerial Technology."
  },
  ru: {
    // Nav
    navHome: "Главная",
    navAbout: "О нас",
    navDrones: "Наши дроны",
    navContact: "Контакты",
    // Hero Section (index.html)
    heroTitle1: "Миллениум Дроны", // Might need a better brand translation or keep as is
    heroTitle2: "Поднимите свой взгляд",
    heroDescription: "Откройте для себя следующее поколение автономных воздушных решений. Точное проектирование, передовые технологии и непревзойденная производительность для каждой миссии.",
    heroBtnExplore: "Исследовать дроны",
    heroBtnLearnMore: "Узнать больше",
    // Common
    footerRights: "Миллениум Дроны. Все права защищены.",
    footerSlogan: "Создавая будущее авиационных технологий."
  }
};

let currentLanguage = 'en'; // Default language

function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang; // Update the lang attribute of the <html> tag

    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[lang][key]) {
        // Preserve child elements like SVGs if they are part of the translatable string
        // For simplicity, this example replaces the whole textContent.
        // A more robust solution might involve marking only text nodes for translation.
        element.textContent = translations[lang][key];
      } else {
        console.warn(`No translation found for key: ${key} in language: ${lang}`);
      }
    });

    // Special handling for elements where direct textContent replacement isn't ideal
    // Example: If a button has an icon and text, you might target a specific span for text.
    // For now, this simple replacement should cover many cases.

    // Update active nav link text if necessary (they are also covered by data-translate-key)
    highlightActiveLink();

  } else {
    console.error(`Language ${lang} not supported.`);
  }
}

function loadLanguage() {
  const preferredLanguage = localStorage.getItem('preferredLanguage');
  if (preferredLanguage && translations[preferredLanguage]) {
    setLanguage(preferredLanguage);
  } else {
    setLanguage('en'); // Default to English
  }
}

// --- End Language Switcher ---

// Function to highlight active navigation link (modified to be callable)
function highlightActiveLink() {
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';

  const desktopNavLinks = document.querySelectorAll('nav div.hidden.md\\:block a[data-navlink]');
  desktopNavLinks.forEach(link => {
    const linkPath = link.getAttribute('data-navlink');
    if (linkPath === currentLocation) {
      link.classList.add('active-nav-link');
      link.classList.remove('inactive-nav-link');
    } else {
      link.classList.add('inactive-nav-link');
      link.classList.remove('active-nav-link');
    }
  });

  const mobileNavLinks = document.querySelectorAll('#mobile-menu a[data-navlink-mobile]');
  mobileNavLinks.forEach(link => {
    const linkPath = link.getAttribute('data-navlink-mobile');
     if (linkPath === currentLocation) {
      link.classList.add('active-nav-link');
      link.classList.remove('inactive-nav-link');
    } else {
      link.classList.add('inactive-nav-link');
      link.classList.remove('active-nav-link');
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(); // Load language first

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = mobileMenuButton ? mobileMenuButton.querySelector('.menu-icon-open') : null;
  const closeIcon = mobileMenuButton ? mobileMenuButton.querySelector('.menu-icon-close') : null;

  if (mobileMenuButton && mobileMenu && openIcon && closeIcon) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden');
      mobileMenuButton.setAttribute('aria-expanded', !isOpen);
      openIcon.style.display = isOpen ? 'block' : 'none';
      closeIcon.style.display = isOpen ? 'none' : 'block';
    });

    // Close mobile menu on link click
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu(); // Use the new function
      });
    });
  }
}

// Function to close mobile menu (called by language switcher and nav links)
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const openIcon = mobileMenuButton ? mobileMenuButton.querySelector('.menu-icon-open') : null;
  const closeIcon = mobileMenuButton ? mobileMenuButton.querySelector('.menu-icon-close') : null;

  if (mobileMenu && mobileMenuButton && openIcon && closeIcon) {
    mobileMenu.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

// Initial setup of mobile menu toggle logic
function setupMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = mobileMenuButton ? mobileMenuButton.querySelector('.menu-icon-open') : null;
  const closeIcon = mobileMenuButton ? mobileMenuButton.querySelector('.menu-icon-close') : null;

  if (mobileMenuButton && mobileMenu && openIcon && closeIcon) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden');
      mobileMenuButton.setAttribute('aria-expanded', !isOpen);
      openIcon.style.display = isOpen ? 'block' : 'none';
      closeIcon.style.display = isOpen ? 'none' : 'block';
    });

    // Close mobile menu on link click
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(); // Load language first
  setupMobileMenu(); // Setup mobile menu listeners

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
      }
      
      console.log('Form data submitted:', { 
        name: name.toString(), 
        email: email.toString(), 
        subject: subject.toString(), 
        message: message.toString() 
      });
      
      contactForm.style.display = 'none';
      formFeedback.classList.remove('hidden');
      formFeedback.innerHTML = `
        <div class="text-center py-8">
          <h3 class="text-xl font-semibold text-green-400">Thank You!</h3>
          <p class="text-brand-text mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      `;
      (contactForm as HTMLFormElement).reset();
      
      setTimeout(() => {
        formFeedback.classList.add('hidden');
        formFeedback.innerHTML = ''; // Clear content
        contactForm.style.display = 'block';
      }, 3000);
    });
  }

  // Active navigation link highlighting
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  
  const desktopNavLinks = document.querySelectorAll('nav div.hidden.md\\:block a[data-navlink]');
  desktopNavLinks.forEach(link => {
    const linkPath = link.getAttribute('data-navlink');
    if (linkPath === currentLocation) {
      link.classList.add('active-nav-link');
      link.classList.remove('inactive-nav-link');
    } else {
      link.classList.add('inactive-nav-link');
      link.classList.remove('active-nav-link');
    }
  });

  const mobileNavLinks = document.querySelectorAll('#mobile-menu a[data-navlink-mobile]');
  mobileNavLinks.forEach(link => {
    const linkPath = link.getAttribute('data-navlink-mobile');
     if (linkPath === currentLocation) {
      link.classList.add('active-nav-link');
      link.classList.remove('inactive-nav-link');
    } else {
      link.classList.add('inactive-nav-link');
      link.classList.remove('active-nav-link');
    }
  });


  // Footer: Current Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

});

// Global function for product details alert (example)
function showProductDetails(productName) {
  alert(`More details for ${productName}`);
}
// Expose to global scope if not already
window.showProductDetails = showProductDetails;
