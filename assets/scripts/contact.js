

// form validation (will be connected to the database once back end is built)
document.addEventListener("DOMContentLoaded", function () {

  // Get the form element
   const saveForm = document.querySelector("#contact-form");
   // Get all the inputs
   const inputs = document.querySelectorAll("#contact-form input:not([type='submit']), #contact-form textarea");

   // Regex patterns
   const patterns = {
    fullname: /^[a-z\d\s]{3,50}$/i, // Adjust the pattern to include whitespace and increase the length limit
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    subject: /^[a-z\d\s]{3,100}$/i // Allow whitespace and increase the length limit
  };
 // Validate function
   function validate(field, regex) {
     if (field.value.trim() === "") {
       field.className = "invalid";
     } else if (regex.test(field.value)) {
       field.className = "valid";
     } else {
       field.className = "invalid";
     }
   }
 // Add event listeners to the inputs
   inputs.forEach((input) => {
     if (input.type !== "submit") {
       // validate the input against regex patterns on keyup
       input.addEventListener("keyup", (e) => {
         validate(e.target, patterns[e.target.attributes.name.value]);
       });
     }
   });



   inputs.forEach((input) => {
    if (input.type !== "submit") {
      input.addEventListener("keyup", (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
      });
      // Add an input event listener for textarea
      input.addEventListener("input", (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
      });
    }
  });
 // add submit event listener to form
   saveForm.addEventListener("submit", function (e) {
     e.preventDefault();
 
     let messages = [];
     // validate inputs against patterns
     inputs.forEach((input) => {
       validate(input, patterns[input.attributes.name.value]);
     });
     // Show error if inputes are not valid
     for (let i = 0; i < inputs.length; i++) {
       if (inputs[i].classList.contains("invalid")) {
         messages.push("All inputs need to be valid.");
       }
     }
 // check for errors, if none create user data
     if (messages.length > 0) {
       console.log(messages);
     } else {
       const userData = {
         fname: document.querySelector("#fname").value,
         email: document.querySelector("#email").value,
         lname: document.querySelector("#subject").value
         
       };
 // turn user data into json 
       const jsonData = JSON.stringify(userData);
       const xhr = new XMLHttpRequest();
      //  this line will be populated with the path to the php file that will handle the data
       xhr.open("POST", "insert php path here");
       xhr.setRequestHeader("Content-Type", "application/json");
 
       xhr.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
           var response = JSON.parse(this.responseText);
           console.log(response);
 
           if (response.status === true) {
             document.querySelector('#exampleModal [data-bs-dismiss="modal"]').click();
             window.location.reload();
           } else {
             console.error("Error:", response.message);
             document.getElementById('errors').innerHTML = '<strong style="color:red;">Account already exists.</strong>';
           }
         }
       };
 
       xhr.send(jsonData);
     }
   });
 });