let display = document.getElementById("display"); // 할 일 입력창

let currentInput = "";
let operator = "";
let firstOperand = "";

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === "") return;
  firstOperand = currentInput;
  operator = op;
  currentInput = "";
}

function calculate() {
  if (firstOperand === "" || currentInput === "") return;

  let result;
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      return;
  }

  display.value = result;
  currentInput = result.toString();
  firstOperand = "";
  operator = "";
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  display.value = "";
}
