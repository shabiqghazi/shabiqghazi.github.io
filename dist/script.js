window.addEventListener("scroll", () => {
  if (window.scrollY >= 120) {
    document.getElementById("navbar").classList.add("shadow-sm");
    document.getElementById("toTop").classList.remove("invisible");
  } else {
    document.getElementById("toTop").classList.add("invisible");
    document.getElementById("navbar").classList.remove("shadow-sm");
  }
});
