//Icone Nav
const editNavElement = document.querySelector(".icon");

editNavElement.addEventListener("click", function(){
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
});

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBgThx = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Ouvrir formulaire (via plusieurs btn)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalBg.style.display = "block";
};

// Fermer formulaire via croix
const closeForm = document.querySelector(".close");

closeForm.addEventListener("click", function() {
	modalBg.style.display = "none";
});

// Fermer fenetre thanks via croix et bouton "fermer"
const closeThanks = document.querySelectorAll(".closeThanks");

closeThanks.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  modalBgThx.style.display = "none";
};


//Validation formulaire 
const form = document.getElementById("form");

// Empecher le submit automatique
form.addEventListener("submit", function(e) {
  e.preventDefault();
});

// REGEX
const nameRegExp = new RegExp("^[A-zÀ-ú \-]+$");
const emailRegExp = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-z]{2,10}$");

// DOM des inputs du formulaire
const inputFirst = document.querySelector(".first");
const inputLast = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const inputBirthdate = document.querySelector(".birthdate");
const inputQuantity = document.querySelector(".quantity");
const inputLocation = document.querySelector(".location");
const inputCondition = document.querySelector(".condition");

// Tests des regex dans les inputs (si true : afficher errors)
// Prénom
form.first.addEventListener('change', function(e) {
  const value = e.target.value;
  const valueLength = e.target.value.length;
  if (nameRegExp.test(value) && valueLength >= 2){
    inputFirst.dataset.errorVisible = "false";
  } else {
    inputFirst.dataset.errorVisible = "true";
  }
});

// Nom
form.last.addEventListener('change', function(e) {
  const value = e.target.value;
  const valueLength = e.target.value.length;
  if (nameRegExp.test(value) && valueLength >= 2){
    inputLast.dataset.errorVisible = "false";
  } else {
    inputLast.dataset.errorVisible = "true";
  }
});

//email
form.email.addEventListener('change', function(e) {
  const value = e.target.value;
  const valueLength = e.target.value.length;
  if (emailRegExp.test(value) && valueLength >= 2){
    inputLast.dataset.errorVisible = "false";
  } else {
    inputLast.dataset.errorVisible = "true";
  }
});

//date de naissance
form.birthdate.addEventListener('change', function(e) {
  const value = e.target.value;
  console.log(e);
  if (value == "yyyy-mm-dd") {
    inputLast.dataset.errorVisible = "false";
  }
});