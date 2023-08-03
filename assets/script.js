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
/* code étape 3 fonctionnel
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

// Récupération des éléments du carrousel
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

// Event listeners pour les clics sur les flèches
arrowLeft.addEventListener("click", actionArrowleftClick);
arrowRight.addEventListener("click", actionArrowRightClick);

// Fonctions pour gérer les clics sur les flèches
function actionArrowleftClick() {
  console.log("Clic sur la flèche gauche");
}

function actionArrowRightClick() {
  console.log("Clic sur la flèche droite");
}
