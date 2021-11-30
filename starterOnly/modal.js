function editNav() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("overlay");
  if (x.className === "topnav") {
    x.className += " responsive";
  y.className += " menu";
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

function closeForm() {
  modalbg.style.display = "none";
  //clear form from previous data
  document.querySelector("form").reset();
  // reset form to previous state
  form.style.display = 'block';
  submitBtn.style.display = 'block';
  successMsg.style.display = 'none';
  successCloseBtn.style.display = 'none';
  //clear error msg 
  errors.style.display = "none";
}

// submit modal form

const forms = document.querySelectorAll('.needs-validation');
const successMsg = document.getElementById('success-message');
const submitBtn = document.getElementById('btn-submit');
const successCloseBtn = document.getElementById('btn-close');
const errors = document.querySelectorAll(".error-message");



//Loop over the form and prevent submission

for (let i = 0; i < forms.length; i++){
    const form = forms[i];

    form.addEventListener('submit', function(event){
      console.log ('starting validation');
      event.preventDefault();

      if (!form.checkValidity()){
        console.log ('form invalid')

        event.stopPropagation();
      } else {
        //successMsg.classList.add('was-validated');

        successMsg.style.display = 'flex';
        successCloseBtn.style.display = 'block';
        form.style.display = 'none';
        submitBtn.style.display = 'none';
        console.log('success message');

        
        
      }

      form.classList.add('was-validated');
    });
}

function validate(event) {
    const forms = document.querySelectorAll('.needs-validation');
    const successMsg = document.querySelectorAll('.success-message');

    console.log('FORMS ARE: ', forms);
    const form = forms[0];

    console.log ('starting validation');
      event.preventDefault();

      if (!form.checkValidity()){
        console.log ('form invalid')

        event.stopPropagation();
        // If the form is invalid, submit it. The form won't actually submit;
        // this will just cause the browser to display the native HTML5 error messages.
      }

      form.classList.add('was-validated');
}