
var storedUserNumDataJSON = localStorage.getItem("currentuser");
// var storedRegistrationDataJSON = localStorage.getItem("registrationData");
var storedRegistrationDataJSON = JSON.parse(localStorage.getItem('registrationData'));

var nameContainer = document.getElementById("name-container");
// var storedRegistrationData = JSON.parse(storedRegistrationDataJSON);




nameContainer.textContent = storedRegistrationDataJSON[storedUserNumDataJSON].username;





    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    

    nameInput.value = storedRegistrationDataJSON[storedUserNumDataJSON].username;
    emailInput.value = storedRegistrationDataJSON[storedUserNumDataJSON].email;
    passwordInput.value = storedRegistrationDataJSON[storedUserNumDataJSON].password;



    function change(){
        var nameInput = document.getElementById('name').value;
        var emailInput = document.getElementById('email').value;
        var passwordInput = document.getElementById('password').value;


      

        // Modify the name property
        storedRegistrationDataJSON[storedUserNumDataJSON].username = nameInput;
        storedRegistrationDataJSON[storedUserNumDataJSON].email = emailInput;
        storedRegistrationDataJSON[storedUserNumDataJSON].password = passwordInput;
        
        // Store the updated data back into the local storage
        localStorage.setItem('registrationData', JSON.stringify(storedRegistrationDataJSON));


        location.reload();
        
    }


    function out(){

        window.location.href = "login.html";
    }




    var ProductInCart = JSON.parse(localStorage.getItem("data"))

    const cartCounter = document.getElementById('cartCounter');

// Update the counter value

  cartCounter.textContent = ProductInCart.length;
  if (ProductInCart.length === 0) {
    cartCounter.style.display = 'none';
  } else {
    cartCounter.style.display = 'inline-block';
  }