var inquirer = require("inquirer");

console.log("");
console.log("Temperature Converter");
console.log("---------------------");
console.log("");

inquirer.prompt([
  {
    type: "list",
    name: "inputCelsiusFahrenheit",
    message:
      "Do you wish to convert from Celsius to Fahrenheit or Fahrenheit to Celsius?",
    choices: ["Celsius to Fahrenheit", "Fahrenheit to Celsius"]
  }
]);
