//Icone Nav
const editNavElement = document.querySelector(".icon");

editNavElement.addEventListener("click", function () {
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
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalBg.style.display = "block";
  })
);

// Close form with cross
const closeForm = document.querySelector(".close");
closeForm.addEventListener("click", function () {
  modalBg.style.display = "none";
});

// Close thanks window with cross and button "close"
const closeThanks = document.querySelectorAll(".closeThanks");
closeThanks.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  modalBgThx.style.display = "none";
}

//------------------FORM-------------------------
// Form validation
const form = document.getElementById("form");

// regex
const nameRegex = new RegExp("^[A-zÀ-ú -]+$");
const emailRegex = new RegExp(
  "^[a-zA-Z0-9_. -]+@[a-zA-Z.-]+[.]{1}[a-z]{2,10}$"
);
const birthdateRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
const quantityRegex = new RegExp("^[0-9]{1,2}$");

// DOM inputs from form
const inputFirst = document.querySelector(".first");
const inputLast = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const inputBirthdate = document.querySelector(".birthdate");
const inputQuantity = document.querySelector(".quantity");
const inputLocation = document.querySelector(".location");
const inputCondition = document.querySelector(".condition");
const inputConditionCheckbox = document.getElementById("checkbox1");

// FUNCTION Test regex on input
function testRegexOnInput(elem, regex, length, input) {
  const value = elem.value.trim();
  const valueLength = elem.value.length;
  if (regex.test(value) && valueLength >= length) {
    input.dataset.errorVisible = "false";
    return true;
  } else {
    input.dataset.errorVisible = "true";
    return false;
  }
}

// FUNCTION Test input Location
function testInputLocation() {
  let hasOneCheck = false;
  inputLocation.dataset.errorVisible = "false";
  const severalLocation = document.getElementsByName("location");
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

// FUNCTION Test checkbox of condition
function testInputCondition() {
  if (inputConditionCheckbox.checked) {
    inputCondition.dataset.errorVisible = "false";
    return true;
  } else {
    inputCondition.dataset.errorVisible = "true";
    return false;
  }
}

// firstname, name, email, birthdate, quantity, location and checkbox of condition
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
const severalLocation = document.getElementsByName("location");
for (var i = 0; i < severalLocation.length; i++) {
  severalLocation[i].addEventListener("change", function () {
    testInputLocation();
  });
}
inputConditionCheckbox.addEventListener("change", function () {
  testInputCondition();
});

//Submit form
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
