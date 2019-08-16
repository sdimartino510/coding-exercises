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
    console.log("");
    console.log(
      `There are ${people} people and ${pizzas} pizzas with ${slices} slices per pizza at the Pizza Party.`
    );
  });

function pizzaCalc(people, pizzas) {}
