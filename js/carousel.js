function htmlToNodes(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.childNodes;
}

const dotElements = `
  <div class="flex gap-3 justify-center mt-4">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>`

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carousel = document.getElementById("carousel");
const carouselWrapper = document.querySelector(".carousel-wrapper");
carouselWrapper.insertAdjacentHTML("beforeend",dotElements)
const carouselItem = document.querySelector(".carousel-item");
const dot = document.getElementsByClassName("dot")

let loading = false;
let scrollIndex = 0;
const slideNum = carousel.childElementCount - 2;

const slideTo = (index) => {
  scrollIndex = index;
  if (scrollIndex < 0) {
    return slideTo(slideNum - 1);
  } else if (scrollIndex >= slideNum) {
    return slideTo(0);
  }
  setActiveCarousel(index)
  carousel.scrollTo(carouselItem.clientWidth * index + 32 * index, 0);
};

const sliderFunction = () => {
  if(carousel.getBoundingClientRect().y < carousel.clientHeight){
    console.log('scroll')
    slideTo(scrollIndex + 1);
  }
}

var sliderInterval = setInterval(sliderFunction, 3000)

const resetInterval = () => {
  clearInterval(sliderInterval)
  sliderInterval = setInterval(sliderFunction, 3000)
}

const setActiveCarousel = (index) => {
  for(let i = 0; i < dot.length; i++){
    dot[i].classList.remove('active')
    if(i === index){
      dot[i].classList.add('active')
    }
  }
}

nextButton.addEventListener("click", (e) => {
  slideTo(scrollIndex + 1);
  resetInterval()
});

prevButton.addEventListener("click", (e) => {
  slideTo(scrollIndex - 1);
  resetInterval()
});
window.addEventListener("resize", () => slideTo(scrollIndex), true);