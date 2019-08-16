var inquirer = require("inquirer");

console.log("");
console.log("Pizza Party!");
console.log("------------");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputPeople",
      message: "How many guests at the party?"
    },
    {
      type: "number",
      name: "inputPizzas",
      message: "How many pizzas are there?"
    },
    {
      type: "number",
      name: "inputSlices",
      message: "How many slices does each pizza have?"
    }
  ])
  .then(answers => {
    const people = answers.inputPeople;
    const pizzas = answers.inputPizzas;
    const slices = answers.inputSlices;
    var slicesEach = pizzaCalc(people, pizzas, slices);
    var leftovers = pizzaLeftovers(people, pizzas, slices);
    console.log("");
    console.log(
      `There are ${people} people and ${pizzas} pizzas with ${slices} slices per pizza at the Pizza Party.`
    );
    console.log("");
    console.log(
      `Each partygoer gets ${Math.floor(slicesEach)} slices of pizza.`
    );
    console.log(`There are ${leftovers} slices of pizza left over.`);
    console.log("");
  });

function pizzaCalc(people, pizzas, slices) {
  const totalSlices = slices * pizzas;
  const slicesEach = totalSlices / people;
  return slicesEach;
}

function pizzaLeftovers(people, pizzas, slices) {
  const totalSlices = slices * pizzas;
  const leftovers = totalSlices % people;
  return leftovers;
}
