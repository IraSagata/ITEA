//  Створіть функцію-конструктор яка буде мати настпні методи:
//   sum(); додавання
//   multiply() множення
//   divide() ділення
//   subtraction() віднімання
//  Також у функції-конструктор повина бути локальна зміна типу const result = “The result is:”
//   і ви маєте її використовувати у методах вказаних вище, наприклад:
//   const calc = new Calculator();
//   calc.sum(2,3) // виведе  “The result is: 5”;
//   calc.divide(9,3) // виведе  “The result is: 3”;
//    і тд….
// HOMEWORK 2
function Calculator() {
  this.multiply = function(firstNumber, secondNumber) {
    let multiplyTwoNumbers = firstNumber * secondNumber;
    console.log(`The result of ultiply is: ${multiplyTwoNumbers}`);
  };
  this.sum = function(firstNumber, secondNumber) {
    let summariseTwoNumbers = firstNumber + secondNumber;
    console.log(`The result of summarise is:  ${summariseTwoNumbers}`);
  };
  this.divide = function(firstNumber, secondNumber) {
    let divideTwoNumbers = firstNumber / secondNumber;
    console.log(`The result of divide is: ${divideTwoNumbers}`);
  };
  this.sub = function(firstNumber, secondNumber) {
    let subtractionTwoNumbers = firstNumber - secondNumber;
    console.log(`The result of subtraction is: ${subtractionTwoNumbers}`);
  };
}
const calc = new Calculator();
calc.sum(2, 5);
calc.divide(9, 3);
calc.multiply(9, 3);
calc.sub(9, 3);
