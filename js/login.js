
function check(){
var storedRegistrationDataJSON = localStorage.getItem("registrationData");

let name = document.getElementById("name").value;
let password = document.getElementById("password").value;


// Check if registration data exists
if (storedRegistrationDataJSON) {
  // Convert the stored registration data back to an object
  var storedRegistrationData = JSON.parse(storedRegistrationDataJSON);


  console.log(storedRegistrationData.length);

  for(let i=0;i<storedRegistrationData.length;i++){
    if(name===storedRegistrationData[i].username && storedRegistrationData[i].password===password){

      var currentuser =  i
      
      
      localStorage.setItem("currentuser", currentuser);

      window.location.href = "home.html";
    }
  }
 

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