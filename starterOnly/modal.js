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
  form.classList.remove('was-validated');
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

  // function validate(event) {
  //   const forms = document.querySelectorAll('.needs-validation');
  //   const successMsg = document.querySelectorAll('.success-message');

  //   console.log('FORMS ARE: ', forms);
  //   const form = forms[0];

  //   console.log ('starting validation');
  //     event.preventDefault();

  //     if (!form.checkValidity()){
  //       console.log ('form invalid')

  //       event.stopPropagation();
  //       // If the form is invalid, submit it. The form won't actually submit;
  //       // this will just cause the browser to display the native HTML5 error messages.
  //     }

  //     form.classList.add('was-validated');
  // }



  

  
  /*//const formData = new FormData();

  let displaySuccess = true;

  const firstNameInput=document.getElementById("first").value;
  const lastNameInput=document.getElementById("last").value;
  const emailInput = document.getElementById("email").value;
  const dateInput = document.getElementById("birthdate").value;
  const locationInput = document.getElementsByName("location");
  const checkboxInput = document.getElementById("checkbox1");

  const firstNameErrorMsg= document.getElementById("error-first");
  const lastNameErrorMsg= document.getElementById("error-last");

  const emailErrorMsg = document.getElementById("error-email");
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const birthdateErrorMsg = document.getElementById("error-date");
  const locationErrorMsg = document.getElementById("error-location");
  const checkboxErrorMsg = document.getElementById("error-checkbox");

  //validation msg
  const validationMsg = document.getElementById("success");

  if (firstNameInput.length < 2){
    console.log ("User name not long enough"); 
    event.preventDefault();
    firstNameErrorMsg.style.display = "inline";
    displaySuccess = false;
  }

  console.log("FIRST NAME IS:", firstNameInput);


  if (lastNameInput.length < 2){
    console.log ("Last name not long enough");
    event.preventDefault();
    lastNameErrorMsg.style.display = "inline";
    displaySuccess = false;
  }

  console.log("LAST NAME IS:", lastNameInput);

  if (!re.test(emailInput) ){
    console.log ("Not a valid Email");
    event.preventDefault();
    emailErrorMsg.style.display = "inline";
    displaySuccess = false;
  }

  console.log("EMAIL IS:", emailInput);

  if (!dateInput){
    console.log ("You must pick a birthdate");
    event.preventDefault();
    birthdateErrorMsg.style.display = "inline";
    displaySuccess = false;
  }

  console.log("BIRTHDAY IS:", dateInput);

  let radioChecked = false;
  for (let i = 0; i < locationInput.length ;i++){
    if (locationInput[i].checked){
      radioChecked = true;
      break;
    } 
  }
  if (!radioChecked){
    console.log ("You must pick a location");
    event.preventDefault();
    locationErrorMsg.style.display = "inline";
    displaySuccess = false;
  }
  
  if (!checkboxInput.checked){
    console.log ("You must check to agree to terms and conditions.");
    event.preventDefault();
    checkboxErrorMsg.style.display = "inline";
    displaySuccess = false;
  }

  
  if(displaySuccess){

    alert("Thank you for submiting your registration details!")
  }
}  



function validate(form) {
  const input = document.getElementById("first");
  
  
  if (firstNameInput.value < 2){
    input.setCustomValidity('You gotta fill this out, yo!');
  } else {
    input.setCustomValidity(' ');
  }
  input.reportValidity();

}*/