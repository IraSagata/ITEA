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
const result = "The result is:";
function Calculator() {
  this.multiply = function(firstNumber, secondNumber) {
    let multiplyTwoNumbers = firstNumber * secondNumber;
    console.log(`${result} ${multiplyTwoNumbers}`);
  };
  this.sum = function(firstNumber, secondNumber) {
    let summariseTwoNumbers = firstNumber + secondNumber;
    console.log(`${result}  ${summariseTwoNumbers}`);
  };
  this.divide = function(firstNumber, secondNumber) {
    let divideTwoNumbers = firstNumber / secondNumber;
    console.log(`${result}  ${divideTwoNumbers}`);
  };
  this.sub = function(firstNumber, secondNumber) {
    let subtractionTwoNumbers = firstNumber - secondNumber;
    console.log(`${result} ${subtractionTwoNumbers}`);
  };
}
const calc = new Calculator();
calc.sum(2, 5);
calc.divide(9, 3);
calc.multiply(9, 3);
calc.sub(9, 3);
