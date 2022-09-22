const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const circles = document.querySelectorAll(".circle");
let activeSlide = 0;
rightBtn.addEventListener("click", () => {
  activeSlide += 1;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
  setCircles();
});

leftBtn.addEventListener("click", () => {
  activeSlide -= 1;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
  setCircles();
});

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    activeSlide = index;
    setBgToBody();
    setActiveSlide();
    setCircles();
  });
});
setBgToBody();
setCircles();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}

function setCircles() {
  circles.forEach((circle) => {
    circle.classList.remove("active");
  });

  circles[activeSlide].classList.add("active");
}
