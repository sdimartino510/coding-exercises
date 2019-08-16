var inquirer = require("inquirer");

console.log("");
console.log("Simple Math!");
console.log("------------");
console.log("");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputNum1",
      message: "Enter the first number:",
      validate: function(value) {
        var valid = !isNaN(parseFloat(value));
        return valid || "Please enter a number";
      }
    },
    {
      type: "number",
      name: "inputNum2",
      message: "Enter the second number:",
      validate: function(value) {
        var valid = !isNaN(parseFloat(value));
        return valid || "Please enter a number";
      }
    }
  ])
  .then(answers => {
    console.log(
      `${answers.inputNum1} + ${answers.inputNum2} = ${sum(
        answers.inputNum1,
        answers.inputNum2
      )}\n${answers.inputNum1} - ${answers.inputNum2} = ${difference(
        answers.inputNum1,
        answers.inputNum2
      )}\n${answers.inputNum1} * ${answers.inputNum2} = ${product(
        answers.inputNum1,
        answers.inputNum2
      )}\n${answers.inputNum1} / ${answers.inputNum2} = ${quotient(
        answers.inputNum1,
        answers.inputNum2
      )}`
    );
  });

function sum(num1, num2) {
  return num1 + num2;
}

function difference(num1, num2) {
  return num1 - num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function quotient(num1, num2) {
  return num1 / num2;
}
