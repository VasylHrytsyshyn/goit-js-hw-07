const fontSizeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeInput.addEventListener('input', () => {
	text.style.fontSize = fontSizeInput.value + 'px';
});