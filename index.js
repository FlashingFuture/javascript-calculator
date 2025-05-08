import { calculate } from "./calculator.js"

let expression = "";
let result = "";

const keypad = document.querySelector(".keypad");


keypad.addEventListener("click", (event) => {
    let clickedInput = event.target.textContent;
    console.log(clickedInput)

    if (clickedInput === "=") {
        result = calculate(expression);
        const resultDiv = document.querySelector(".result");
        resultDiv.textContent = String(result);

    } else if ("+-÷x".includes(clickedInput)) {
        if (clickedInput === "÷") {
            clickedInput = "/";
        }
        expression += ` ${clickedInput} `;

    } else if (clickedInput === "<") {
        if (expression[expression.length-1] === " ") {
            expression = expression.slice(0, -3)
        } else {
            expression = expression.slice(0, -1)
        }

    } else if (clickedInput === "AC") {
        expression = "";
        result = "";
        const resultDiv = document.querySelector(".result");
        resultDiv.textContent = String(result);

    } else {
        expression += clickedInput
    }

    const expressionDiv = document.querySelector(".expression");

    expressionDiv.textContent = expression;


})