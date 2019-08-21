const user = {
  name: "alex"
};
let userCharacteristics = {
  age: 26,
  bornDate: 1993
};

user.__proto__ = userCharacteristics;
console.log(user.name);
console.log(user.bornDate);
console.log(user.age);

// function Person (name, surname){
//   this.name = name;
//   this.surname = surname;
//   this.sayHello = function() {
//   console.log(`hello  ${name}  ${surname}`)
//   }
//   }
//   const person = new Person( 'Iryna', 'Sagata');
//   person.sayHello()

// function Calculator (){

//   this.sayHello = function(firstNumber, secondNumber) {
//     let sum = firstNumber * secondNumber;
//   console.log(sum)
//   }
//   }
// const calc = new Calculator()
//  calc.sayHello(2, 5)
