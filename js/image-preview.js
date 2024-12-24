const dialog = document.querySelector("dialog");
const dialogImage = document.querySelector("#dialog-img");
const images = document.querySelectorAll(".preview");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
images.forEach((image) => {
  image.addEventListener("click", () => {
    dialogImage.setAttribute('src', '')
    const source = image.getAttribute('src')
    dialogImage.setAttribute('src', source)
    dialog.showModal();
  });
})

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});