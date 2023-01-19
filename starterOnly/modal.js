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

// REGEX
const nameRegExp = new RegExp("^[A-zÀ-ú \-]+$");
const emailRegExp = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-z]{2,10}$");

const inputTest = document.getElementById("first");
console.log(first.dataset.error);

