// Tayolarge's simple JS calculator

// Operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// Operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// Conditions

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


// The Result
alert(`${number1} ${operator} ${number2} = ${result}`);
console.log(`${number1} ${operator} ${number2} = ${result}`);
