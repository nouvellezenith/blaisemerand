const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "images/MM25.png") {
    monImage.setAttribute("src", "images/GC5F5F5E.png");
  } else {
    monImage.setAttribute("src", "images/MM25.png");
  }
});
let monBouton = document.querySelector("button");
let monTitre = document.querySelector("h1");
function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  if (!monNom) {
    definirNomUtilisateur();
  } else {
    localStorage.setItem("nom", monNom);
    monTitre.textContent = `Bienvenue, ${monNom}`;
  }
}
if (!localStorage.getItem("nom")) {
  definirNomUtilisateur();
} else {
  const nomEnregistre = localStorage.getItem("nom");
  monTitre.textContent = `Bienvenue, ${nomEnregistre}`;
}
monBouton.addEventListener("click", () => {
  definirNomUtilisateur();
});
