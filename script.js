const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
function showError(input, message) {
    const formControl= input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function isValidEmail(email) {
    var isValid;
    (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))?isValid=true:isValid=false;
    return isValid;
}

//Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    username.value.length<3?showError(username,'Username must be longer than three digits.'):username.value.length>14?showError(username, 'Username must be shorter than 15 digits.'):showSuccess(username);
    !isValidEmail(email)?showError(email,'This is not an email.'):showSuccess(email);
    password.value===''?showError(password, 'Password field must not be empty.'):password.value.length<6?showError(password, 'Password too weak.'):showSuccess(password);
    password2.value===''?showError(password2, 'Password verification field must not be empty.'):password2.value!==password.value?showError(password2,'Passwords must match.'):showSuccess(password2);
})