document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  var toggle = document.querySelector(".menu-toggle");
  var header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (!isOpen) {
        closeAllDropdowns();
      }
    });
  }

  // Dropdown ("Work") toggle — click/tap/keyboard, with hover as a bonus on desktop
  var dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  function closeAllDropdowns() {
    dropdownToggles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
      btn.closest(".has-dropdown").classList.remove("dropdown-open");
    });
  }

  dropdownToggles.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var parent = btn.closest(".has-dropdown");
      var isOpen = parent.classList.contains("dropdown-open");
      closeAllDropdowns();
      if (!isOpen) {
        parent.classList.add("dropdown-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function () {
    closeAllDropdowns();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllDropdowns();
      var active = document.activeElement;
      if (active && active.closest(".has-dropdown")) {
        active.blur();
      }
    }
  });
});
