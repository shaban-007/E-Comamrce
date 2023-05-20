
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

      let expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);

    document.cookie="username="+name+";expires="+expiryDate+';'
    document.cookie="password="+password+";expires="+expiryDate+';'

      console.log(document.cookie)
      window.location.href = "home.html";
    }
  }
}
}
