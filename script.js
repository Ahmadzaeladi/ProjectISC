const NavbarLinks = document.querySelectorAll(".navbar-nav li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  let isAfterHome = false;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
      if (current !== "home") {
        isAfterHome = true;
      }
    }
  });

  NavbarLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
    if (isAfterHome) {
      link.style.color = "blue"; // Set color to blue for all links after home section
    } else {
      link.style.color = "white"; // Reset color to white
    }
    if (link.getAttribute("href").includes(current)) {
      link.parentElement.classList.add("active");
      link.style.color = "var(--second-color)"; // Set color to second color for active link
    }
  });

  // sticky navbar
  let header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

feather.replace();
