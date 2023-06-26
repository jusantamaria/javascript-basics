//validation code for inputs 


var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var error_email = document.getElementById('error_email');
var error_password = document.getElementById('error_password');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', password_Verify);

function validated() {
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        error_email.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        error_password.style.display = "block";
        password.focus();
        return false;
    }
}

function email_Verify(){
    if(email.value.length >=8){
        email.style.border = "1px solid silver";
        error_email.style.display = "none";
        return true;
    }
}
function password_Verify(){
    if(password.value.length >=5){
        password.style.border = "1px solid silver";
        error_password.style.display = "none";
        return true;
    }
}
