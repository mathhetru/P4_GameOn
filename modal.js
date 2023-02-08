/** 
 ** DOM ELEMENTS
 * Icône du menu en responsive
 * Fenêtre de la modal du formulaire et de remerciements.
 * Boutons "Je m'inscris"
 * Boutons croix de fermeture et bouton "fermer"
 */
const editNavElement = document.querySelector(".icon");
const modalBg = document.querySelector(".bground");
const modalBgThx = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeForm = document.querySelector(".close");
const closeThanks = document.querySelectorAll(".closeThanks");


/** 
 ** FONCTION
 * en responsive, au click, ouvre la navigation
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
 ** FONCTION
 * ouvre le formulaire au click sur "je m'inscris"
 */
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalBg.style.display = "block";
  })
);

/** 
 ** FONCTION
 * ferme la modal du formulaire avec la croix
 */
closeForm.addEventListener("click", function () {
  modalBg.style.display = "none";
});

/** 
 ** FONCTION
 * ferme la modal de remerciement avec la croix ou avec le bouton "Fermer"
 */
closeThanks.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  modalBgThx.style.display = "none";
}

/** 
 ** REGEX 
 * Les regex pour le nom, prénom, email, date de naissance et quantité
 */
const nameRegex = new RegExp("^[A-zÀ-ú -]+$");
const emailRegex = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-z]{2,10}$");
const birthdateRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
const quantityRegex = new RegExp("^[0-9]{1,2}$");

/** 
 ** DOM ELEMENTS
 * inputs du prénom, nom, email, date de naissance, quantité
 * input bouton radio et les inputs contenant les différentes location
 * checkbox des conditions d'utilisation
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
 ** FONCTION qui teste le regex sur l'input
 * reprend la value de l'input puis trim (rogne les espaces vides)
 * reprend la length de la value de l'input
 * SI le test regex sur la value est true ET si la longueur de la value est supérieure ou égale à length
 * ALORS on laisse le errorVisible à false (n'affiche pas l'erreur) PUIS return TRUE
 * SINON on passe le errorVisible à true (affiche l'erreur) PUIS return FALSE
 * @param {string} input 
 * @param {string} regex 
 * @param {number} length 
 * @param {string} div 
 * @returns {boolean}
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
 ** FONCTION qui teste l'input location et qui permet de la valider
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
 ** FONCTION qui permet de valider la checkbox condition
 * @returns {boolean} 
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
 ** FONCTION sur chaque input du formulaire
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
 * on boucle for sur les différentes locations
 ** FONCTION qui écoute le change  
 * et
 ** FONCTION qui teste l'input location sur chacune
 */
for (var i = 0; i < severalLocation.length; i++) {
  severalLocation[i].addEventListener("change", function () {
    testInputLocation();
  });
}
/**
 ** FONCTION qui écoute le change sur l'input checkbox condition
 * et FONCTION qui teste l'input de la checkbox condition
 */
inputConditionCheckbox.addEventListener("change", function () {
  testInputCondition();
});

/**
 ** FONCTION qui écoute le submit sur le formulaitre
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
