const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordContainer = document.querySelector('.confirm-password');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('.error');

confirmPassword.addEventListener('input', e => {
    if (confirmPassword.value.length >= 8 && confirmPassword.value!==password.value) {
        confirmPassword.setCustomValidity('Invalid field.');
        errorMessage.classList.add('active');
    }
    if (confirmPassword.value.length >= 8 && confirmPassword.value===password.value) {
        confirmPassword.setCustomValidity('');
        errorMessage.classList.remove('active');
    }
});