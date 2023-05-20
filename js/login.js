
function check(){
var storedRegistrationDataJSON = localStorage.getItem("registrationData");
console.log(storedRegistrationDataJSON)

var name = document.getElementById("name").value;
var password = document.getElementById("password").value;

// Check if registration data exists
if (storedRegistrationDataJSON) {
  // Convert the stored registration data back to an object
  var storedRegistrationData = JSON.parse(storedRegistrationDataJSON);
 

  // Compare the stored registration data with user's entered credentials
  if (
    storedRegistrationData.username === name &&
    storedRegistrationData.password === password
  ) {
    window.location.href = "home.html";
  } else {
    console.log("Not Ok")
  }
} else {
  // No registration data found in Local Storage
  // User needs to register first or handle the scenario accordingly
}}