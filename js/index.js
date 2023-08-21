const input = document.getElementById('inputText');
const boton = document.getElementById('buttonText');

boton.addEventListener('click', function() {
  const inputValue = input.value;
  localStorage.setItem('data', inputValue);
});