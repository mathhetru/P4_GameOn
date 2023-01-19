//Click on icon NAV
const editNavElement = document.querySelector(".icon");

editNavElement.addEventListener("click", function(){
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
})

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBgThx = document.querySelector(".bground-thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event (via plusieurs btn)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// fermer formulaire via croix
const closeForm = document.querySelector(".close");

closeForm.addEventListener("click", function() {
	modalBg.style.display = "none";
});

// fermer fenetre thanks via croix et bouton "fermer"
const closeThanks = document.querySelectorAll(".closeThanks");

closeThanks.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalBgThx.style.display = "none";
}
