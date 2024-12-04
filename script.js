let expression = ''; 

function pressKey(value) {
  expression += value;  
  updateDisplay();
}

function clearDisplay() {
  expression = '';  
  updateDisplay();
}

function deleteLast() {
  expression = expression.slice(0, -1); 
  updateDisplay();
}

function calculate() {
  try {
    expression = eval(expression).toString(); 
    updateDisplay();
  } catch (error) {
    expression = 'Error'; 
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = expression;  
}
