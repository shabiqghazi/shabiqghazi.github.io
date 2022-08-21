let home = document.getElementById("link_home");
let about = document.getElementById("link_about");
let skills = document.getElementById("link_skills");
let portfolio = document.getElementById("link_portfolio");
let contact = document.getElementById("link_contact");
let posHome = document.getElementById("home").offsetTop - 100;
let posAbout = document.getElementById("about").offsetTop - 100;
let posSkills = document.getElementById("skills").offsetTop - 100;
let posPortfolio = document.getElementById("portfolio").offsetTop - 100;
let posContact = document.getElementById("contact").offsetTop - 100;

window.addEventListener("scroll", () => {
  let y_pos = window.scrollY;
  if (y_pos >= 120) {
    document.getElementById("navbar").classList.add("shadow-sm");
    document.getElementById("toTop").classList.remove("invisible");
  } else {
    document.getElementById("toTop").classList.add("invisible");
    document.getElementById("navbar").classList.remove("shadow-sm");
  }
  if (y_pos >= posHome && y_pos < posAbout) {
    home.classList.add("active");
    about.classList.remove("active");
    skills.classList.remove("active");
    portfolio.classList.remove("active");
    contact.classList.remove("active");
  } else if (y_pos >= posAbout && y_pos < posSkills) {
    home.classList.remove("active");
    about.classList.add("active");
    skills.classList.remove("active");
    portfolio.classList.remove("active");
    contact.classList.remove("active");
  } else if (y_pos >= posSkills && y_pos < posPortfolio) {
    home.classList.remove("active");
    about.classList.remove("active");
    skills.classList.add("active");
    portfolio.classList.remove("active");
    contact.classList.remove("active");
  } else if (y_pos >= posPortfolio && y_pos < posContact) {
    home.classList.remove("active");
    about.classList.remove("active");
    skills.classList.remove("active");
    portfolio.classList.add("active");
    contact.classList.remove("active");
  } else if (y_pos >= posContact) {
    home.classList.remove("active");
    about.classList.remove("active");
    skills.classList.remove("active");
    portfolio.classList.remove("active");
    contact.classList.add("active");
  }
});

// navbar toggle
let nav = document.getElementById("navbar-toggle");
let navbarMenu = document.getElementById("navbar_menu");
let navToggleIcon = document.getElementById("nav-toggle-icon");
nav.addEventListener("click", (e) => {
  nav.classList.toggle("nav-toggle-active");
  navbarMenu.classList.toggle("-right-3/4");
  navbarMenu.classList.toggle("nav-menu-active");
});
window.addEventListener("click", (e) => {
  if (e.target != nav && e.target != navbarMenu && e.target != navToggleIcon) {
    nav.classList.remove("nav-toggle-active");
    navbarMenu.classList.add("-right-3/4");
    navbarMenu.classList.remove("nav-menu-active");
  }
});
