let total = 20;
let isJoueur = true;

const resultat = document.querySelector("#resultat");
const nombreTotal = document.querySelector("#nombre-total");
const reset = document.querySelector("#reset");
const buttonPlay = document.querySelectorAll(".jouer");

for (const button of buttonPlay) {
  button.addEventListener("click", () => {
    if (total <= 0 || !isJoueur) return;
    const nombre = button.textContent;
    if (nombre > 3 || nombre < 1 || isNaN(nombre)) {
      alert("Veuillez saisir un nombre valide compris entre 1 et 3");
      return;
    }
    total -= nombre;
    isJoueur = false;
    if (total <= 0) {
      resultat.innerHTML = `Vous avez perdu ! Vous avez pris la dernire allumette`;
      nombreTotal.innerHTML = `il reste 0 allumettes`;
      return;
    }
    let computer = Math.floor(Math.random() * 3) + 1;
    console.log(computer);
    total -= computer;
    if (total <= 0) {
      resultat.innerHTML = `Vous avez gagné ! L'ordinateur a pris la dernière allumette`;
      nombreTotal.innerHTML = `il reste 0 allumettes`;
      return;
    }
    isJoueur = true;
    resultat.innerHTML = `Vous avez pris ${nombre} allumettes, et l'ordinateur a pris ${computer} allumettes`;
    nombreTotal.innerHTML = `il reste ${total} allumettes`;
  });
}

reset.addEventListener("click", () => {
  total = 20;
  isJoueur = true;
  resultat.innerHTML = "";
  nombreTotal.innerHTML = `il reste ${total} allumettes`;
});

document.addEventListener("keyup", (e) => {
  if (e.shiftKey && e.key === "Enter") {
    reset.click();
  }
});

document.addEventListener("keydown", (e) => {
  e.key === "1" ? buttonPlay[0].click() : "";
  e.key === "2" ? buttonPlay[1].click() : "";
  e.key === "3" ? buttonPlay[2].click() : "";
});
