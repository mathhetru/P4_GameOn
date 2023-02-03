/** 
 * DOM ELEMENT
 * Icône du menu en responsive, <span> contenant ".icon"
 */
const editNavElement = document.querySelector(".icon");

/** 
 * FONCTION addEventListener "click"
 * ajoute ".responsive" sur la <div> qui contient "#mytopnav" lors du click sur la <span> ".icon"
 */
editNavElement.addEventListener("click", function () {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
});

/** 
 * DOM ELEMENTS
 * Fenêtre de la modal du formulaire : <div> contenant .bground
 * Fenêtre de la modal de remerciement : <div> contenant .bground-thanks
 * Bouton "Je m'inscris": 2 <button> contenant .modal-btn (1 pour version desk et 1 pour version tablet/mobile)
 */
const modalBg = document.querySelector(".bground");
const modalBgThx = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");

/** 
 * FONCTION addEventListener "click"
 * ouvre le formulaire lors du click sur les <button>
 */
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalBg.style.display = "block";
  })
);

/** 
 * DOM ELEMENT + FONCTION addEventListener "click"
 *  Icône croix : <span> contenant .close
 *  ferme la modal du formulaire avec la croix
 */
const closeForm = document.querySelector(".close");
closeForm.addEventListener("click", function () {
  modalBg.style.display = "none";
});

/** 
 * DOM ELEMENT + FONCTION addEventListener
 *  Icône croix : <span> contenant .closeThanks
 *  ferme la modal de remerciement avec la croix ou avec le bouton "Fermer"
 */
const closeThanks = document.querySelectorAll(".closeThanks");
closeThanks.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  modalBgThx.style.display = "none";
}

/** 
 * REGEX 
 * nameRegex pour le nom, prénom
 * emailRegex pour l'email
 * birthdateRegex pour la date de naissance
 * quantityRegex pour la quantité
 */
const nameRegex = new RegExp("^[A-zÀ-ú -]+$");
const emailRegex = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-z]{2,10}$");
const birthdateRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
const quantityRegex = new RegExp("^[0-9]{1,2}$");

/** 
 * DOM ELEMENTS
 * input du prénom : <div> contenant .first
 * input du nom : <div> contenant .last
 * input de l'email : <div> contenant .email
 * input de la date de naissance : <div> contenant .birthdate
 * input de la quantité : <div> contenant .quantity
 * bouton radio pour le choix du tournoi : <div> contenant .location
 * les inputs contenant les différentes location : <input> contenant le name location
 * checkbox des conditions d'utilisation : <div> contenant .condition
 */
const inputFirst = document.querySelector(".first");
const inputLast = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const inputBirthdate = document.querySelector(".birthdate");
const inputQuantity = document.querySelector(".quantity");
const inputLocation = document.querySelector(".location");
const severalLocation = document.getElementsByName("location");
const inputCondition = document.querySelector(".condition");
const inputConditionCheckbox = document.getElementById("checkbox1");

/** 
 * FONCTION testRegexOnInput()
 * @param {string} input 
 * @param {string} regex 
 * @param {number} length 
 * @param {string} div 
 * @returns {boolean}
 * Teste le regex sur l'<input>
 * reprend la value de l'input puis trim (rogne les espaces vides)
 * reprend la length de la value de l'input
 * SI le test regex sur la value est true ET si la longueur de la value est supérieure ou égale à length
 * ALORS on laisse le errorVisible à false (n'affiche pas l'erreur) PUIS return TRUE
 * SINON on passe le errorVisible à true (affiche l'erreur) PUIS return FALSE
 */
function testRegexOnInput(input, regex, length, div) {
  const value = input.value.trim();
  const valueLength = input.value.length;
  if (regex.test(value) && valueLength >= length) {
    div.dataset.errorVisible = "false";
    return true;
  } else {
    div.dataset.errorVisible = "true";
    return false;
  }
}

/**
 * FONCTION testInputLocation()
 * variable hasOneCheck de base à false
 * le errorVisible de l'input location de base à "false" (on n'affiche pas l'erreur)
 * on boucle for sur les locations
 * SI un des location est check 
 * ALORS on passe hasOneCheck à true
 * on sort de la boucle et return true
 * SI hasOneCheck n'est pas passé à true 
 * ALORS on passe le errorVisible à true (on affiche l'erreur) PUIS on return false
 * @returns {boolean}
 * 
 */
function testInputLocation() {
  let hasOneCheck = false;
  inputLocation.dataset.errorVisible = "false";
  for (let i = 0; i < severalLocation.length; i++) {
    if (severalLocation[i].checked) {
      hasOneCheck = true;
    }
  }
  if (!hasOneCheck) {
    inputLocation.dataset.errorVisible = "true";
    return false;
  }
  return true;
}

/**
 * permet de valider la checkbox condition
 * @returns {boolean} true is input ok then false
 */
function testInputCondition() {
  if (inputConditionCheckbox.checked) {
    inputCondition.dataset.errorVisible = "false";
    return true;
  } else {
    inputCondition.dataset.errorVisible = "true";
    return false;
  }
}

/**
 * FONCTION addEventListener "change" sur chaque input du formulaire
 * avec la fonction testRegexOnInput qui contient les paramètres utiles
 */
form.first.addEventListener("change", function (e) {
  testRegexOnInput(form.first, nameRegex, 2, inputFirst);
});
form.last.addEventListener("change", function (e) {
  testRegexOnInput(form.last, nameRegex, 2, inputLast);
});
form.email.addEventListener("change", function (e) {
  testRegexOnInput(form.email, emailRegex, 2, inputEmail);
});
form.birthdate.addEventListener("change", function (e) {
  testRegexOnInput(form.birthdate, birthdateRegex, 10, inputBirthdate);
});
form.quantity.addEventListener("change", function (e) {
  testRegexOnInput(form.quantity, quantityRegex, 1, inputQuantity);
});
/**
 * on boucle for sur les locations
 * FONCTION addEventListener "change" sur chaque 
 * et FONCTION testInputLocation() sur chaque
 */
for (var i = 0; i < severalLocation.length; i++) {
  severalLocation[i].addEventListener("change", function () {
    testInputLocation();
  });
}
/**
 * FONCTION addEventListener "change"  sur l'input checkbox condition
 * et FONCTION testInputCondition()
 */
inputConditionCheckbox.addEventListener("change", function () {
  testInputCondition();
});

/**
 * FONCTION addEventListener "submit" sur le form
 * on empêche le comportement par défaut
 * SI toutes les FONCTIONS testRegexOnInput() + testInputLocation() + testInputCondition() return TRUE 
 * ALORS on ferme la modal du formulaire et on ouvre la modal de remerciement
 * ET on reset les inputs
 */
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    testRegexOnInput(form.first, nameRegex, 2, inputFirst) &&
    testRegexOnInput(form.last, nameRegex, 2, inputLast) &&
    testRegexOnInput(form.email, emailRegex, 2, inputEmail) &&
    testRegexOnInput(form.birthdate, birthdateRegex, 10, inputBirthdate) &&
    testRegexOnInput(form.quantity, quantityRegex, 1, inputQuantity) &&
    testInputLocation() &&
    testInputCondition()
  ) {
    modalBg.style.display = "none";
    modalBgThx.style.display = "block";
    form.reset();
  }
});
