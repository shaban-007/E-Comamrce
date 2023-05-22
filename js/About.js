
var navLinks = document.getElementsByClassName("nav-link");

// Add click event listener to each navigation link
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    // Remove active class from all navigation links
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    
    // Add active class to the clicked navigation link
    this.classList.add("active");
  });
}













var button = document.getElementById("ahmed");

// Add click event listener to the button
button.addEventListener("click", function() {
  // Open the link in a new tab/window
  window.open("https://www.linkedin.com/in/ahmedshapan", "_blank");
});

var button1 = document.getElementById("hamza");

// Add click event listener to the button
button1.addEventListener("click", function() {
  // Open the link in a new tab/window
  window.open("https://www.linkedin.com/in/hamza-abd-el-baset-302bab268", "_blank");
});



function products(){
  window.location.href = "home.html";
}



var storedUserNumDataJSON = localStorage.getItem("currentuser");
// var storedRegistrationDataJSON = localStorage.getItem("registrationData");
var storedRegistrationDataJSON = JSON.parse(localStorage.getItem('registrationData'));

var nameContainer = document.getElementById("name-container");
// var storedRegistrationData = JSON.parse(storedRegistrationDataJSON);




nameContainer.textContent = storedRegistrationDataJSON[storedUserNumDataJSON].username;




var ProductInCart = JSON.parse(localStorage.getItem("data"))



const cartCounter = document.getElementById('cartCounter');

// Update the counter value

  cartCounter.textContent = ProductInCart.length;
  if (ProductInCart.length === 0) {
    cartCounter.style.display = 'none';
  } else {
    cartCounter.style.display = 'inline-block';
  }