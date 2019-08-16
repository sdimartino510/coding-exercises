var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "inputString",
      message: "What is the input string?"
    }
  ])
  .then(answers => {
    var charCount = answers.inputString.length;
    console.log(answers.inputString + " has " + charCount + " characters.");
  });
