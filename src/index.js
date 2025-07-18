import { calculate } from "./core/calculator.js";

let expression = "";
let result = "";
let calculationDone = false;

const keypad = document.querySelector(".keypad");
const resultDiv = document.querySelector(".result");
const expressionDiv = document.querySelector(".expression");

keypad.addEventListener("click", (event) => {
  const clickedInput = event.target.textContent;

  handleInput(clickedInput);
  expressionDiv.textContent = expression;
});

document.addEventListener("keydown", (event) => {
  const typedInput = normalizeKeyboardInput(event.key);

  if ("0123456789.+-x÷<=".includes(typedInput)) {
    handleInput(typedInput);
    expressionDiv.textContent = expression;
  }
});

function handleInput(clickedInput) {
  if (clickedInput === "=") {
    performCalculation();
  } else if ("+-÷x".includes(clickedInput)) {
    handleOperatorInput(clickedInput);
  } else if (clickedInput === "<") {
    handleBackspaceInput();
  } else if (clickedInput === "AC") {
    handleClearInput();
  } else if (clickedInput === ".") {
    handleDotInput();
  } else {
    handleNumberInput(clickedInput);
  }
}

function normalizeKeyboardInput(typedInput) {
  if (typedInput === "Backspace") return "<";
  if (typedInput === "Enter") return "=";
  if (typedInput === "*") return "x";
  if (typedInput === "/") return "÷";
  return typedInput;
}

function performCalculation() {
  try {
    result = calculate(expression);
    resultDiv.textContent = String(result);
    calculationDone = true;
  } catch (error) {
    resultDiv.textContent = error.message;
    expression = "";
  }
}

function handleOperatorInput(clickedInput) {
  if (calculationDone) {
    expression = String(result);
    calculationDone = false;
  }
  if (clickedInput === "÷") {
    clickedInput = "/";
  }
  expression += ` ${clickedInput} `;
}

function handleBackspaceInput() {
  if (expression[expression.length - 1] === " ") {
    expression = expression.slice(0, -3);
  } else {
    expression = expression.slice(0, -1);
  }
  if (calculationDone) {
    calculationDone = false;
  }
}

function handleClearInput() {
  expression = "";
  result = "";
  resultDiv.textContent = String(result);
  calculationDone = false;
}

function handleDotInput() {
  if (calculationDone) {
    expression = "0";
    calculationDone = false;
  } else if (expression === "" || expression.endsWith(" ")) {
    expression += "0";
  }

  const parts = expression.split(" ");
  const currentNumber = parts[parts.length - 1];

  if (!currentNumber.includes(".")) {
    expression += ".";
  }
}

function handleNumberInput(clickedInput) {
  if (calculationDone) {
    expression = "";
    calculationDone = false;
  }
  expression += clickedInput;
}
