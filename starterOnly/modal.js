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

// Open form (with several button)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalBg.style.display = "block";
};

// Close form with cross
const closeForm = document.querySelector(".close");
closeForm.addEventListener("click", function() {
	modalBg.style.display = "none";
});

// Close thanks window with cross and button "close"
const closeThanks = document.querySelectorAll(".closeThanks");

closeThanks.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  modalBgThx.style.display = "none";
};


// Form validation
const form = document.getElementById("form");

// Empecher le submit automatique
form.addEventListener("submit", function(e) {
  e.preventDefault();
});

// REGEX
const nameRegExp = new RegExp("^[A-zÀ-ú \-]+$");
const emailRegExp = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-z]{2,10}$");
const birthdateRegExp = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");

// DOM des inputs du formulaire
const inputFirst = document.querySelector(".first");
const inputLast = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const inputBirthdate = document.querySelector(".birthdate");
const inputQuantity = document.querySelector(".quantity");
const inputLocation = document.querySelector(".location");
const inputCondition = document.querySelector(".condition");

// FUNCTION TEST DU REGEX SUR L'INPUT
function testRegexOnInput(elem, regex, input) {
  elem.addEventListener('change', function(e) {
    const value = e.target.value;
    const valueLength = e.target.value.length;
    if (regex.test(value) && valueLength >= 2){
      input.dataset.errorVisible = "false";
    } else {
      input.dataset.errorVisible = "true";
    }
  });
}

// Prénom, nom, email
testRegexOnInput(form.first, nameRegExp, inputFirst); 
testRegexOnInput(form.last, nameRegExp, inputLast);
testRegexOnInput(form.email, emailRegExp, inputEmail);

//date de naissance
form.birthdate.addEventListener('change', function(e) {
  const value = e.target.value;
  console.log(e);
  if (value == "yyyy-mm-dd") {
    inputLast.dataset.errorVisible = "false";
  }
});