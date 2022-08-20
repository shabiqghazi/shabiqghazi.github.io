window.addEventListener("scroll", () => {
  if (window.scrollY >= 120) {
    document.getElementById("navbar").classList.add("shadow-sm");
  } else {
    document.getElementById("navbar").classList.remove("shadow-sm");
  }
});
