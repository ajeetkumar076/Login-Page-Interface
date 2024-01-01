// Get references to DOM elements
const passwordInput = document.querySelector(".passwordInput");
const passwordButton = document.querySelector(".passwordButton");
const passwordButtonImg = document.querySelector(".passwordButtonImg");

// Flags to track mouse over input and button
let isMouseOverInput = false;
let isMouseOverButton = false;

// Event listener for mouseover on password input
passwordInput.addEventListener("mouseover", function(){
  // Display the password button when mouse is over input
  passwordButton.style.display = "block";
  isMouseOverInput = true;
});

// Event listener for mouseout on password input
passwordInput.addEventListener("mouseout", function(){
  // Update flag and set timeout to hide button if not over button
  isMouseOverInput = false;
  setTimeout(function() {
    if (!isMouseOverButton) {
      passwordButton.style.display = "none";
    }
  }, 10);
});

// Event listener for mouseover on password button
passwordButton.addEventListener("mouseover", function () {
  // Update flag when mouse is over button
  isMouseOverButton = true;
});

// Event listener for mouseout on password button
passwordButton.addEventListener("mouseout", function () {
  // Update flag and set timeout to hide button if not over input
  isMouseOverButton = false;
  setTimeout(function() {
    if (!isMouseOverInput) {
      passwordButton.style.display = "none";
    }
  }, 10);
});

// Event listener for click on password button
passwordButton.addEventListener("click", function () {
  // Toggle password visibility and update button image accordingly
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    passwordButtonImg.src = "./images/hide.png";
  } else {
    passwordInput.type = "password";
    passwordButtonImg.src = "./images/show.png";
  }
});
