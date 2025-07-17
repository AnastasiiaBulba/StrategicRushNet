// Mobile Menu functionality
export function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const nav = document.querySelector(".nav");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

  if (!mobileMenuToggle || !nav) return;

  let isMenuOpen = false;

  mobileMenuToggle.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    // Toggle menu visibility
    if (isMenuOpen) {
      nav.style.display = "flex";
      nav.style.position = "absolute";
      nav.style.top = "100%";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background =
        "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)";
      nav.style.boxShadow = "0 8px 32px rgba(44, 62, 80, 0.15)";
      nav.style.flexDirection = "column";
      nav.style.padding = "var(--spacing-xl)";
      nav.style.gap = "var(--spacing-lg)";
      nav.style.zIndex = "1000";
      nav.style.borderTop = "3px solid var(--primary-color)";
      nav.style.borderRadius = "0 0 var(--radius-lg) var(--radius-lg)";
      nav.style.backdropFilter = "blur(10px)";

      // Add animation for menu items
      const navItems = nav.querySelectorAll(".nav-item");
      navItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(-10px)";
        setTimeout(() => {
          item.style.transition = "all 0.3s ease";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 100);
      });

      // Animate hamburger to X
      hamburgerLines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[2].style.transform = "rotate(-45deg) translate(7px, -6px)";

      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      nav.style.display = "";
      nav.style.position = "";
      nav.style.top = "";
      nav.style.left = "";
      nav.style.right = "";
      nav.style.background = "";
      nav.style.boxShadow = "";
      nav.style.flexDirection = "";
      nav.style.padding = "";
      nav.style.gap = "";
      nav.style.zIndex = "";
      nav.style.borderTop = "";
      nav.style.borderRadius = "";
      nav.style.backdropFilter = "";

      // Reset menu items
      const navItems = nav.querySelectorAll(".nav-item");
      navItems.forEach((item) => {
        item.style.transition = "";
        item.style.opacity = "";
        item.style.transform = "";
      });

      // Reset hamburger
      hamburgerLines[0].style.transform = "";
      hamburgerLines[1].style.opacity = "";
      hamburgerLines[2].style.transform = "";

      // Restore body scroll
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      isMenuOpen &&
      !mobileMenuToggle.contains(e.target) &&
      !nav.contains(e.target)
    ) {
      mobileMenuToggle.click();
    }
  });

  // Close menu when pressing Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
      mobileMenuToggle.click();
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && isMenuOpen) {
      mobileMenuToggle.click();
    }
  });
}
