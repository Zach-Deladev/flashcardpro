const form = document.getElementById("contact-form");
const nameInput = document.getElementById("fname");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const errorDiv = document.querySelector(".errors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
   
    // form.submit();
    errorDiv.innerHTML = "<p style='color: green;' >Thanks for your message!</p>";
  }
});

function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();

  let isValid = true;

  errorDiv.innerHTML = "";

  if (nameValue === "") {
    errorDiv.innerHTML = "<p style='color: red;' >Name cannot be blank</p>";
    isValid = false;
  }

  if (emailValue === "") {
    errorDiv.innerHTML ="<p style='color: red;' >Email cannot be blank</p>";
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    errorDiv.innerHTML ="<p style='color: red;' >Email is not valid</p>";
    isValid = false;
  } 

  if (subjectValue === "") {
    errorDiv.innerHTML ="<p style='color: red;' >Subject cannot be blank</p>";
    isValid = false;
  } 



  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  formControl.classList.add("error");
  formControl.classList.remove("success");

  const errorMessage = document.createElement("p");
  errorMessage.innerText = message;
  errorDiv.appendChild(errorMessage);
}



function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}
