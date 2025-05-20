let total = 20;
let isJoueur = true;

const input = document.querySelector("#nombre");
const button = document.querySelector("#jouer");
const resultat = document.querySelector("#resultat");
const nombreTotal = document.querySelector("#nombre-total");
const reset = document.querySelector("#reset");

button.addEventListener("click", () => {
  if (total <= 0 || !isJoueur) return;
  const nombre = parseInt(input.value);
  if (nombre > 3 || nombre < 1 || isNaN(nombre)) {
    alert("Veuillez entrer un nombre valide compris entre 1 et 3");
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
  input.value = "";
  input.focus();
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});

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

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") {
    input.focus();
  }
});
