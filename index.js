let rs = require("readline-sync");

function getValidNumber(prompt) {
  while (true) {
    let userInput = rs.question(prompt);
    if (!isNaN(userInput) && userInput.trim() !== "") {
      return parseFloat(userInput);
    } else {
      console.log("This is not a valid number, please try again.");
    }
  }
}

function performOperation(firstNumber, secondNumber, operation) {
  if (operation === "+") {
    return firstNumber + secondNumber;
  } else if (operation === "-") {
    return firstNumber - secondNumber;
  } else if (operation === "*") {
    return firstNumber * secondNumber;
  } else if (operation === "/") {
    if (secondNumber === 0) {
      return "Error: Cannot divide by zero!";
    }
    return firstNumber / secondNumber;
  } else {
    return "Invalid operation";
  }
}

function calculate() {
  let operation;
  while (true) {
    operation = rs.question(
      "What operation would you like to perform? (e.g. +, -, *, /): "
    );
    if (["+", "-", "*", "/"].includes(operation)) {
      break;
    } else {
      console.log("That is not a valid operation, please try again.");
    }
  }

  const num1 = getValidNumber("Please enter the first number: ");
  const num2 = getValidNumber("Please enter the second number: ");

  let result = performOperation(num1, num2, operation);
  console.log(`The result is: ${result}`);
}

calculate();
