var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "inputName",
      message: "What is your name?"
    }
  ])
  .then(answers => {
    console.log("Hello, " + answers.inputName + ", nice to meet you!");
  });
