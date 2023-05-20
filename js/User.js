
var storedRegistrationDataJSON = localStorage.getItem("registrationData");
var nameContainer = document.getElementById("name-container");
var storedRegistrationData = JSON.parse(storedRegistrationDataJSON);

nameContainer.textContent = storedRegistrationData.username;





    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    nameInput.value = storedRegistrationData.username;
    emailInput.value = storedRegistrationData.email;
    passwordInput.value = storedRegistrationData.password;



    function change(){
        var nameInput = document.getElementById('name').value;
        var emailInput = document.getElementById('email').value;
        var passwordInput = document.getElementById('password').value;


        var userData = JSON.parse(localStorage.getItem('registrationData'));

        // Modify the name property
        userData.username = nameInput;
        userData.email = emailInput;
        userData.password = passwordInput;
        
        // Store the updated data back into the local storage
        localStorage.setItem('registrationData', JSON.stringify(userData));


        location.reload();




        
    }