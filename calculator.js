let display = document.getElementById('display');
let currentInput = '0';

function appendToDisplay(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function calculate() {
  try {
    currentInput = eval(display.innerText).toString();
    display.innerText = currentInput;
  } catch(error) {
    display.innerText = 'Error';
  }
}

function clearDisplay() {
  display.innerText = '0';
}
