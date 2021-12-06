function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeForm() {
  modalbg.style.display = "none";
  //clear form from previous data
  document.querySelector("form").reset();
  // reset form to previous state
  form.style.display = "block";
  submitBtn.style.display = "block";
  successMsg.style.display = "none";
  successCloseBtn.style.display = "none";
  //clear error msg
  form.classList.remove("was-validated");
}

// submit modal form
const forms = document.querySelectorAll(".needs-validation");
const successMsg = document.getElementById("success-message");
const submitBtn = document.getElementById("btn-submit");
const successCloseBtn = document.getElementById("btn-close");
const errors = document.querySelectorAll(".error-message");

//Loop over the form and prevent submission
for (let i = 0; i < forms.length; i++) {
  const form = forms[i];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      //successMsg.classList.add('was-validated');
      successMsg.style.display = "flex";
      successCloseBtn.style.display = "block";
      form.style.display = "none";
      submitBtn.style.display = "none";
    }

    form.classList.add("was-validated");
  });
}
