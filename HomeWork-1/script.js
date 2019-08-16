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
