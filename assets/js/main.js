/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Nov 04 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

    /**
   * Light/Dark Mode Toggle Functionality
   */
    document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.getElementById("mode-toggle");
      const body = document.body;
  
      // Check for saved mode in local storage
      const currentMode = localStorage.getItem("theme");
      if (currentMode) {
        body.classList.add(currentMode);
      }
  
      // Update button text based on current mode
      toggleButton.textContent = body.classList.contains("light-mode")
        ? "Switch to Dark Mode"
        : "Switch to Light Mode";
  
      // Toggle theme on button click
      toggleButton.addEventListener("click", function () {
        if (body.classList.contains("light-mode")) {
          body.classList.remove("light-mode");
          body.classList.add("dark-mode");
          toggleButton.textContent = "Switch to Light Mode";
          localStorage.setItem("theme", "dark-mode");
        } else {
          body.classList.remove("dark-mode");
          body.classList.add("light-mode");
          toggleButton.textContent = "Switch to Dark Mode";
          localStorage.setItem("theme", "light-mode");
        }
      });
    });

// Функция для получения текущего времени
     function getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }

// Функция для обновления времени на странице
    function updateClock() {
      const clockElement = document.getElementById('clock');
      if (clockElement) {
      clockElement.textContent = getCurrentTime();
    }
  }

// Запуск обновления времени каждую секунду
    setInterval(updateClock, 1000);

// Начальная установка времени
    updateClock();

    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contact-form");
      const resultContainer = document.getElementById("average-result");
      
      form.addEventListener("submit", function (e) {
        e.preventDefault();
    
        // Получаем значения полей
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address1 = document.getElementById("address1").value.trim();
        const address2 = document.getElementById("address2").value.trim();
        const numericFields = [
          parseFloat(document.getElementById("num1").value.trim()),
          parseFloat(document.getElementById("num2").value.trim()),
          parseFloat(document.getElementById("num3").value.trim()),
          parseFloat(document.getElementById("num4").value.trim()),
          parseFloat(document.getElementById("num5").value.trim()),
        ];
    
        // Проверяем email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Invalid email address!");
          return;
        }
    
        // Проверяем телефон
        const phoneRegex = /^[0-9]{8,}$/;
        if (!phoneRegex.test(phone)) {
          alert("Invalid phone number! Must contain at least 8 digits.");
          return;
        }
    
        // Проверяем адрес
        if (!address1 || !address2) {
          alert("Address fields cannot be empty!");
          return;
        }
    
        // Объединяем адрес
        const fullAddress = `${address1}, ${address2}`;
    
        // Проверяем числовые значения
        if (numericFields.some(isNaN)) {
          alert("All numeric fields must be filled with valid numbers!");
          return;
        }
    
        // Вычисляем среднее значение
        const average = numericFields.reduce((sum, val) => sum + val, 0) / numericFields.length;
    
        // Задаем цвет текста на основе среднего
        if (average < 50) {
          resultContainer.style.color = "red";
        } else if (average >= 50 && average <= 70) {
          resultContainer.style.color = "orange";
        } else {
          resultContainer.style.color = "green";
        }
    
        // Выводим среднее значение
        resultContainer.textContent = `Average Result: ${average.toFixed(2)}`;
    
        // Логируем объект с данными
        console.log({
          email,
          phone,
          fullAddress,
          numericFields,
          average,
        });
    
        alert("Form submitted successfully!");
      });
    });
    
     

})();