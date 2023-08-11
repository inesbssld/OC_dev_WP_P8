const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupération des éléments du carrousel
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

// Event listeners pour les clics sur les flèches
arrowLeft.addEventListener("click", actionArrowleftClick);
arrowRight.addEventListener("click", actionArrowRightClick);

// Récupération des éléments du carrousel
const slideImage = document.getElementById("slide");
const slideTagLine = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

// Index de la slide actuelle
let currentSlideIndex = 0;

// Gestion du clic sur la flèche droite
function actionArrowRightClick() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  updateSlide(currentSlideIndex);
}

// Gestion du clic sur la flèche gauche
function actionArrowleftClick() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  updateSlide(currentSlideIndex);
}

// Mettre à jour le carrousel en fonction de l'index de la slide
function updateSlide(slideIndex) {
  const slide = slides[slideIndex];
  slideImage.src = `./assets/images/slideshow/${slide.image}`;
  slideTagLine.innerHTML = slide.tagLine;

  // Mettre à jour la classe du point actif
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Mettre à jour la première slide initialement
updateSlide(currentSlideIndex);
