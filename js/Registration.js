document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Check if passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Passwords do not match');
        } else {
            addData()
            // Clear any previous error messages
            clearError(confirmPasswordInput);

            // Submit the form (simulating a successful registration)
            alert('Registration successful!');
            form.reset();
            }
            });
            function showError(inputElement, errorMessage) {
                const errorElement = document.createElement('p');
                errorElement.className = 'error';
                errorElement.textContent = errorMessage;
            
                const parentElement = inputElement.parentElement;
                parentElement.appendChild(errorElement);
            }
            
            function clearError(inputElement) {
                const parentElement = inputElement.parentElement;
                const errorElement = parentElement.querySelector('.error');
            
                if (errorElement) {
                    parentElement.removeChild(errorElement);
                }
            }
            });

                    
            


            function addData(){
                

            var thisname = document.getElementById("name").value;
            var thisemail = document.getElementById("email").value;
            var thispassword = document.getElementById("password").value;
            var existingData = JSON.parse(localStorage.getItem('registrationData')) || [];
            console.log(existingData)


            var registrationData = {
                username: thisname,
                password: thispassword,
                email:thisemail,
                // other registration fields...
              };
              existingData.push(registrationData);

              
              // Convert the registration data to JSON string
              //   var registrationDataJSON = JSON.stringify(data);
              
              // Save the registration data to Local Storage
              localStorage.setItem("registrationData", JSON.stringify(existingData));
              window.location.href = "login.html";

            }





            // var form = document.getElementById('registration-form');

            // form.addEventListener('submit', function(event) {
            //     event.preventDefault(); // Prevent form submission
            //     const passwordInput = document.getElementById('password');
            //     const confirmPasswordInput = document.getElementById('confirm-password');
          
            //     if (passwordInput.value === confirmPasswordInput.value){
            //     addData();}
            // });
          
            