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
/* code étape 3 fonctionnel 1ere étape
// ajout d'un evenement sur le click des flèches
let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche gauche");
});

let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche droite");
});
*/

/*code étape 3 amélioré avec la fonctions */

// Récupération des éléments du carrousel
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

// Event listeners pour les clics sur les flèches
arrowLeft.addEventListener("click", actionArrowleftClick);
arrowRight.addEventListener("click", actionArrowRightClick);

// Fonctions pour gérer les clics sur les flèches
function actionArrowleftClick() {
  console.log("Vous avez cliqué sur la flèche gauche");
}

function actionArrowRightClick() {
  console.log("Vous avez cliqué sur la flèche droite");
}

/* etape 4 */

// Récupération des éléments du carrousel
const slideImage = document.getElementById("slide");
const slideTagLine = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot"); // renvoit sous forme de liste dont il faut récupérer les éléments avec une boucle for

// Index de la slide actuelle
let currentSlideIndex = 0;

// Mettre à jour le carrousel en fonction de l'index de la slide
function updateSlide(slideIndex) {
  const slide = slides[slideIndex];
  slideImage.src = `./assets/images/slideshow/${slide.image}`;
  slideTagLine.innerHTML = slide.tagLine;

  /* version 1
  // Mettre à jour la classe du point actif
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
*/

  //version 2
  /*
// Mettre à jour la classe du point actif sans forEach
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('dot_selected', i === slideIndex);
  }


*/

  //ou version 3

  // Mettre à jour la classe du point actif
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === slideIndex);
  });
}

//puis on appelle la fonction

/* etape 5 ( avec les conditions)*/

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

// Mettre à jour la première slide initialement
updateSlide(currentSlideIndex);
