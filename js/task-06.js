const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur',() => {
	if(validationInput.value.length === parseInt(validationInput.getAttribute('data-length'), 10)) {
		validationInput.classList.add('valid');
		validationInput.classList.remove('invalid');
	} else {
		validationInput.classList.add('invalid');
		validationInput.classList.remove('valid');
	}
})