// === Navbar scroll effect ===
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
  
    function handleNavbarBackground() {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  
    handleNavbarBackground();
    window.addEventListener("scroll", handleNavbarBackground);
  });
  
  // === Count Animation ===
  function animateCount(id, target, duration) {
    const el = document.getElementById(id);
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      el.textContent = start;
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    animateCount("count-experience", 15, 2000);
    animateCount("count-chefs", 50, 2000);
  });
  
  // === Menu Filtering ===
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#menuTabs .nav-link");
    const menuItems = document.querySelectorAll(".menu-item");
    let currentFilter = "catering";
  
    function applyFilter(filter) {
      menuItems.forEach((item) => {
        item.style.display = item.classList.contains(filter) ? "block" : "none";
      });
  
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.filter === filter);
      });
    }
  
    applyFilter(currentFilter);
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        applyFilter(this.dataset.filter);
      });
    });
  });
  
  // === Delivery Day Limit (Daily Plan) ===
  document.addEventListener("DOMContentLoaded", function () {
    const planSelect = document.getElementById("plan_id");
    const checkboxes = document.querySelectorAll('input[name="delivery_days[]"]');
  
    function resetCheckboxes() {
      checkboxes.forEach(cb => {
        cb.checked = false;
        cb.disabled = false;
      });
    }
  
    function enforceDailyLimit() {
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
          if (planSelect.value === "1") {
            if (this.checked) {
              checkboxes.forEach(cb => {
                if (cb !== this) cb.disabled = true;
              });
            } else {
              checkboxes.forEach(cb => cb.disabled = false);
            }
          }
        });
      });
    }
  
    planSelect.addEventListener("change", function () {
      resetCheckboxes();
      if (planSelect.value === "1") {
        enforceDailyLimit();
      } else {
        checkboxes.forEach(cb => cb.disabled = false);
      }
    });
  
    if (planSelect.value === "1") {
      enforceDailyLimit();
    }
  });

  // swiper
  new Swiper('.swiper', {
    loop: false,
    grabCursor: true,
    spaceBetween: 24,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  