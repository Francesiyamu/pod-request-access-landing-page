const formElements = document.forms["form-validation"];


function validateForm (event){
        event.preventDefault(); //prevents form from submitting

        
        //select your errormessage element nd email value
        let error_message_email = document.getElementById('error-message');
        let email = document.getElementById('email').value;

        //define patterns
          let emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

          //validate email

          if(!emailRegex.test(email)){
            error_message_email.textContent = email === '' ? 'email cannot be empty':'oeps please check your email';
            return;
          }

            error_message_email.textContent = ''; // Clear error on success
            formElements.reset();
}

formElements.addEventListener('submit', validateForm);