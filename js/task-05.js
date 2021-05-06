const inputValue = document.querySelector('#name-input');
const outValue = document.querySelector('#name-output');
inputValue.addEventListener('input', (event) => {
	if(inputValue.value === '') {
		outValue.textContent = 'незнакомец';
	} else{
		outValue.textContent = event.currentTarget.value;
	}
});