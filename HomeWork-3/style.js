let fruits = [
  {
    name: "Lemon",
    color: "Yellow"
  },
  {
    name: "apple",
    color: "red"
  },
  {
    name: "pineapple",
    color: "brown"
  }
];

function printFruitInfo() {
  document.write(`Fruit name: ${this.name}, with color: ${this.color}`);
  document.write("<hr>");
}

for (let i = 0; i < fruits.length; i++) {
  printFruitInfo.apply(fruits[i], []);
}
