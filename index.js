let rs = require('readline-sync');

let operation;

while (true) { 
    operation = rs.question('What operation would you like to perform? (e.g. +, -, *, /): ');
    if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
        break;
    } else {
        console.log('That is not a valid operation, please try again.');
    }
}


let firstNumber;

while(true) {
  firstNumber = rs.question('Please enter the first number: ');
  if (!isNaN(firstNumber) && firstNumber.trim() !== '') {
    firstNumber = parseFloat(firstNumber);
    break;
  } else {
    console.log('This is not a valid number, please try again.');
  }
}

let secondNumber;
while(true) {
  secondNumber = rs.question('Please enter the second number: ');
  if (!isNaN(secondNumber) && secondNumber.trim() !== '') {
    secondNumber = parseFloat(secondNumber);
    break;
  } else {
    console.log('This is not a valid number, please try again.');
  }
}

function performOperation (firstNumber, secondNumber, operation){
if (operation === '+') {
  return firstNumber + secondNumber;
} else if (operation === '-'){
  return firstNumber - secondNumber
} else if(operation === '*'){
return firstNumber * secondNumber;
} else if(operation === '/'){
  if(secondNumber === 0) {
    return "Error: Cannot divide by zero!";
  }
return firstNumber / secondNumber;
} else{
  return "Invalid operation";
}
}
let result = performOperation(firstNumber, secondNumber, operation);
console.log(`the result is ${result}`);