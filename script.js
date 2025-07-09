// --- Language Switcher ---
const translations = {
  en: {
    // Nav
    navHome: "Home",
    navAbout: "About Us",
    navDrones: "Our Drones",
    navContact: "Contact Us",
    // Hero Section (index.html)
    heroTitle1: "SOLA",
    heroTitle2: "Elevate Your Perspective",
    heroDescription: "Discover the next generation of autonomous aerial solutions. Precision engineering, cutting-edge technology, and unparalleled performance for every mission.",
    heroBtnExplore: "Explore Drones",
    heroBtnLearnMore: "Learn More",
    // About Teaser (index.html)
    aboutTeaserTitle: "Who We Are",
    aboutTeaserSlogan: "Innovating the Skies with SOLA",
    aboutTeaserDescription: "We are dedicated to designing and manufacturing state-of-the-art drones that push the boundaries of aerial technology. Our commitment is to quality, reliability, and innovation.",
    aboutTeaserLink: "Learn more about us →",
    // Products Highlight (index.html)
    productsHighlightTitle: "Our Flagship Drones",
    productsHighlightSlogan: "Engineered for performance, built for reliability.",
    productKeySpecs: "Key Specs:",
    productViewDetailsBtn: "View Details",
    // Falcon X1
    productFalconName: "SOLA Falcon X1",
    productFalconDescription: "High-performance surveillance and reconnaissance drone with extended flight time and advanced optics.",
    productFalconSpecCamera: "4K HDR Camera",
    productFalconSpecFlight: "55 Min Flight Time",
    productFalconSpecRange: "10km Range",
    productFalconPrice: "$2,499",
    // Sparrow Z3
    productSparrowName: "SOLA Sparrow Z3",
    productSparrowDescription: "Compact and agile drone perfect for aerial photography and videography enthusiasts.",
    productSparrowSpecCamera: "2.7K Camera",
    productSparrowSpecFlight: "30 Min Flight Time",
    productSparrowSpecRange: "5km Range",
    productSparrowPrice: "$899",
    // Eagle Pro
    productEagleName: "SOLA Eagle Pro",
    productEagleDescription: "Professional-grade drone for industrial inspections and mapping solutions.",
    productEagleSpecImaging: "Thermal Imaging",
    productEagleSpecPrecision: "RTK Precision",
    productEagleSpecFlight: "70 Min Flight Time",
    productEaglePrice: "$7,999",
    viewAllDronesBtn: "View All Drones",
    // Features Highlight (index.html)
    featuresTitle: "Why Choose SOLA?",
    featuresSlogan: "Experience the difference with our advanced drone technology.",
    featureExtendedRangeTitle: "Extended Range",
    featureExtendedRangeDesc: "Our drones boast impressive operational ranges, allowing you to cover more ground.",
    featureBatteryLifeTitle: "Superior Battery Life",
    featureBatteryLifeDesc: "Fly longer and capture more with our high-capacity, intelligent battery systems.",
    featureOpticsTitle: "Advanced Optics",
    featureOpticsDesc: "Capture stunning visuals with high-resolution cameras and state-of-the-art sensors.",
    // Call To Action (index.html)
    ctaTitle: "Ready to Elevate Your Operations?",
    ctaSlogan: "Explore our drone solutions today.",
    ctaViewOurDrones: "View Our Drones",
    ctaContactSalesBtn: "Contact Sales",
    // About Page (about.html)
    aboutPageTitle: "About SOLA",
    aboutPageSlogan: "Pioneering the future of aerial solutions with passion and precision.",
    ourStoryTitle: "Our Story",
    ourStoryParagraph1: "Founded in 2020 by a team of passionate engineers and aviation experts, SOLA was born from a shared vision: to make advanced aerial technology accessible and impactful. We saw the potential for drones to transform various sectors, from agriculture and construction to public safety and cinematography. Starting in a small workshop, we meticulously designed and tested our first prototypes, focusing on durability, performance, and user-friendliness. Today, SOLA has grown into a trusted name, known for pushing the boundaries of what's possible with unmanned aerial systems. Our commitment to research and development ensures that we stay at the forefront of the industry, delivering cutting-edge solutions to our clients worldwide.",
    ourMissionTitle: "Our Mission",
    ourMissionParagraph: "Our mission is to revolutionize industries through innovative aerial technology, providing reliable, efficient, and intelligent drone solutions that empower our customers to achieve more.",
    ourVisionTitle: "Our Vision",
    ourVisionParagraph: "To be the global leader in drone technology, recognized for our commitment to quality, innovation, and customer success.",
    coreValuesTitle: "Our Core Values",
    valueInnovationTitle: "Innovation",
    valueInnovationDesc: "Constantly pushing the boundaries of technology to deliver cutting-edge solutions.",
    valueReliabilityTitle: "Reliability",
    valueReliabilityDesc: "Building robust and dependable drones that perform consistently in demanding environments.",
    valueCustomerFocusTitle: "Customer Focus",
    valueCustomerFocusDesc: "Understanding and exceeding our customers' needs with tailored solutions and support.",
    teamImageCaption: "The dedicated team behind SOLA.",
    // Products Page (products.html)
    productsPageTitle: "Our Drone Fleet",
    productsPageSlogan: "Explore our comprehensive range of advanced aerial solutions, designed for diverse applications and industries.",
    productFalconSpecAI: "AI Object Tracking",
    productSparrowSpecDesign: "Lightweight Design",
    productEagleSpecWeather: "Weather Resistant",
    productHawkName: "SOLA Hawk V2",
    productHawkDescription: "Versatile drone for agricultural surveys and precision farming.",
    productHawkSpecSensor: "Multispectral Sensor",
    productHawkSpecFlightPaths: "Automated Flight Paths",
    productHawkSpecFlightTime: "45 Min Flight Time",
    productHawkSpecFrame: "Durable Frame",
    productHawkPrice: "$4,500",
    customSolutionTitle: "Can't find what you're looking for?",
    customSolutionDescription: "We offer custom drone solutions tailored to your specific requirements. Get in touch with our specialists to discuss your project.",
    customSolutionButton: "Request Custom Solution",
    // Contact Page (contact.html)
    contactPageTitle: "Get In Touch",
    contactPageSlogan: "We're here to help with any questions you have about our drones or services. Reach out and let's talk.",
    sendMessageTitle: "Send Us a Message",
    formLabelName: "Full Name",
    formLabelEmail: "Email Address",
    formLabelSubject: "Subject",
    formLabelMessage: "Message",
    formButtonSend: "Send Message",
    formFeedbackSuccessTitle: "Thank You!",
    formFeedbackSuccessMsg: "Your message has been sent successfully. We'll get back to you soon.",
    contactInfoTitle: "Contact Information",
    contactEmailTitle: "Email Us",
    contactEmailValue: "info@sola-drones.com",
    contactPhoneTitle: "Call Us",
    contactPhoneValue: "+1 (555) 123-4567",
    contactAddressTitle: "Visit Us",
    contactAddressValue: "123 Drone Lane, Innovation City, CA 90210",
    mapTitle: "Company Location",
    // Page Titles
    titleHome: "SOLA - Home",
    titleAbout: "About Us - SOLA",
    titleProducts: "Our Drones - SOLA",
    titleContact: "Contact Us - SOLA",
    // Common
    footerRights: "SOLA. All rights reserved.",
    footerSlogan: "Pioneering the Future of Aerial Technology."
  },
  ru: {
    // Nav
    navHome: "Главная",
    navAbout: "О нас",
    navDrones: "Наши дроны",
    navContact: "Контакты",
    // Hero Section (index.html)
    heroTitle1: "SOLA",
    heroTitle2: "Поднимите свой взгляд",
    heroDescription: "Откройте для себя следующее поколение автономных воздушных решений. Точное проектирование, передовые технологии и непревзойденная производительность для каждой миссии.",
    heroBtnExplore: "Исследовать дроны",
    heroBtnLearnMore: "Узнать больше",
    // About Teaser (index.html)
    aboutTeaserTitle: "Кто мы",
    aboutTeaserSlogan: "Инновации в небе с SOLA",
    aboutTeaserDescription: "Мы посвятили себя разработке и производству самых современных дронов, которые расширяют границы воздушных технологий. Наша приверженность – качество, надежность и инновации.",
    aboutTeaserLink: "Узнать о нас больше →",
    // Products Highlight (index.html)
    productsHighlightTitle: "Наши флагманские дроны",
    productsHighlightSlogan: "Разработано для производительности, создано для надежности.",
    productKeySpecs: "Ключевые характеристики:",
    productViewDetailsBtn: "Посмотреть детали",
    // Falcon X1
    productFalconName: "SOLA Falcon X1",
    productFalconDescription: "Высокопроизводительный дрон для наблюдения и разведки с увеличенным временем полета и передовой оптикой.",
    productFalconSpecCamera: "4K HDR камера",
    productFalconSpecFlight: "55 мин время полета",
    productFalconSpecRange: "10 км дальность",
    productFalconPrice: "$2,499",
    // Sparrow Z3
    productSparrowName: "SOLA Sparrow Z3",
    productSparrowDescription: "Компактный и маневренный дрон, идеально подходящий для любителей аэрофотосъемки и видеографии.",
    productSparrowSpecCamera: "2.7K камера",
    productSparrowSpecFlight: "30 мин время полета",
    productSparrowSpecRange: "5 км дальность",
    productSparrowPrice: "$899",
    // Eagle Pro
    productEagleName: "SOLA Eagle Pro",
    productEagleDescription: "Профессиональный дрон для промышленных инспекций и картографических решений.",
    productEagleSpecImaging: "Тепловизионная съемка",
    productEagleSpecPrecision: "RTK точность",
    productEagleSpecFlight: "70 мин время полета",
    productEaglePrice: "$7,999",
    viewAllDronesBtn: "Посмотреть все дроны",
    // Features Highlight (index.html)
    featuresTitle: "Почему выбирают SOLA?",
    featuresSlogan: "Ощутите разницу с нашими передовыми технологиями дронов.",
    featureExtendedRangeTitle: "Увеличенная дальность",
    featureExtendedRangeDesc: "Наши дроны обладают впечатляющими рабочими диапазонами, позволяя вам охватывать больше территории.",
    featureBatteryLifeTitle: "Превосходное время работы от батареи",
    featureBatteryLifeDesc: "Летайте дольше и снимайте больше с нашими высокоемкими интеллектуальными аккумуляторными системами.",
    featureOpticsTitle: "Передовая оптика",
    featureOpticsDesc: "Снимайте потрясающие визуальные эффекты с помощью камер высокого разрешения и самых современных датчиков.",
    // Call To Action (index.html)
    ctaTitle: "Готовы улучшить свои операции?",
    ctaSlogan: "Ознакомьтесь с нашими решениями для дронов уже сегодня.",
    ctaViewOurDrones: "Посмотреть наши дроны",
    ctaContactSalesBtn: "Связаться с отделом продаж",
    // About Page (about.html)
    aboutPageTitle: "О SOLA",
    aboutPageSlogan: "Прокладывая путь в будущее воздушных решений со страстью и точностью.",
    ourStoryTitle: "Наша история",
    ourStoryParagraph1: "Основанная в 2020 году командой увлеченных инженеров и экспертов в области авиации, SOLA родилась из общего видения: сделать передовые воздушные технологии доступными и эффективными. Мы увидели потенциал дронов для трансформации различных отраслей, от сельского хозяйства и строительства до общественной безопасности и кинематографии. Начиная в небольшой мастерской, мы тщательно разрабатывали и тестировали наши первые прототипы, уделяя особое внимание прочности, производительности и удобству использования. Сегодня SOLA превратилась в доверенное имя, известное тем, что расширяет границы возможного с беспилотными авиационными системами. Наша приверженность исследованиям и разработкам гарантирует, что мы остаемся на переднем крае отрасли, предоставляя передовые решения нашим клиентам по всему миру.",
    ourMissionTitle: "Наша миссия",
    ourMissionParagraph: "Наша миссия — революционизировать отрасли с помощью инновационных воздушных технологий, предоставляя надежные, эффективные и интеллектуальные решения для дронов, которые позволяют нашим клиентам достигать большего.",
    ourVisionTitle: "Наше видение",
    ourVisionParagraph: "Быть мировым лидером в области технологий дронов, признанным за нашу приверженность качеству, инновациям и успеху клиентов.",
    coreValuesTitle: "Наши основные ценности",
    valueInnovationTitle: "Инновации",
    valueInnovationDesc: "Постоянно расширяем границы технологий для предоставления передовых решений.",
    valueReliabilityTitle: "Надежность",
    valueReliabilityDesc: "Создание прочных и надежных дронов, которые стабильно работают в сложных условиях.",
    valueCustomerFocusTitle: "Ориентация на клиента",
    valueCustomerFocusDesc: "Понимание и превосходство потребностей наших клиентов с помощью индивидуальных решений и поддержки.",
    teamImageCaption: "Преданная команда SOLA.",
    // Products Page (products.html)
    productsPageTitle: "Наш парк дронов",
    productsPageSlogan: "Ознакомьтесь с нашим широким ассортиментом передовых воздушных решений, предназначенных для различных применений и отраслей.",
    productFalconSpecAI: "ИИ отслеживание объектов",
    productSparrowSpecDesign: "Легкая конструкция",
    productEagleSpecWeather: "Устойчивость к погодным условиям",
    productHawkName: "SOLA Hawk V2",
    productHawkDescription: "Универсальный дрон для сельскохозяйственных обследований и точного земледелия.",
    productHawkSpecSensor: "Мультиспектральный датчик",
    productHawkSpecFlightPaths: "Автоматизированные маршруты полетов",
    productHawkSpecFlightTime: "45 мин время полета",
    productHawkSpecFrame: "Прочная рама",
    productHawkPrice: "$4,500",
    customSolutionTitle: "Не можете найти то, что ищете?",
    customSolutionDescription: "Мы предлагаем индивидуальные решения для дронов, адаптированные к вашим конкретным требованиям. Свяжитесь с нашими специалистами, чтобы обсудить ваш проект.",
    customSolutionButton: "Запросить индивидуальное решение",
    // Contact Page (contact.html)
    contactPageTitle: "Свяжитесь с нами",
    contactPageSlogan: "Мы здесь, чтобы помочь с любыми вопросами о наших дронах или услугах. Обращайтесь, и давайте поговорим.",
    sendMessageTitle: "Отправьте нам сообщение",
    formLabelName: "Полное имя",
    formLabelEmail: "Адрес электронной почты",
    formLabelSubject: "Тема",
    formLabelMessage: "Сообщение",
    formButtonSend: "Отправить сообщение",
    formFeedbackSuccessTitle: "Спасибо!",
    formFeedbackSuccessMsg: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
    contactInfoTitle: "Контактная информация",
    contactEmailTitle: "Напишите нам",
    contactEmailValue: "info@sola-drones.com",
    contactPhoneTitle: "Позвоните нам",
    contactPhoneValue: "+1 (555) 123-4567",
    contactAddressTitle: "Посетите нас",
    contactAddressValue: "123 Дрон Лейн, Инновационный Город, CA 90210",
    mapTitle: "Местоположение компании",
    // Page Titles
    titleHome: "SOLA - Главная",
    titleAbout: "О нас - SOLA",
    titleProducts: "Наши дроны - SOLA",
    titleContact: "Контакты - SOLA",
    // Common
    footerRights: "SOLA. Все права защищены.",
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

    // Update page title
    const pageFileName = window.location.pathname.split('/').pop().replace('.html', ''); // e.g., "index", "about"
    let titleKey = '';
    if (pageFileName === 'index' || pageFileName === '') {
      titleKey = 'titleHome';
    } else if (pageFileName === 'about') {
      titleKey = 'titleAbout';
    } else if (pageFileName === 'products') {
      titleKey = 'titleProducts';
    } else if (pageFileName === 'contact') {
      titleKey = 'titleContact';
    }

    if (titleKey && translations[lang][titleKey]) {
      document.title = translations[lang][titleKey];
    } else if (titleKey) {
      console.warn(`No title translation found for key: ${titleKey} in language: ${lang}`);
    }

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

      const successTitleKey = "formFeedbackSuccessTitle";
      const successMessageKey = "formFeedbackSuccessMsg";
      const currentTranslations = translations[currentLanguage] || translations.en;

      formFeedback.innerHTML = `
        <div class="text-center py-8">
          <h3 class="text-xl font-semibold text-green-400">${currentTranslations[successTitleKey]}</h3>
          <p class="text-brand-text mt-2">${currentTranslations[successMessageKey]}</p>
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
