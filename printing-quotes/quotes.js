var inquirer = require("inquirer");

console.log("");

inquirer
  .prompt([
    {
      type: "string",
      name: "inputQuote",
      message: "What is the quote?"
    },
    {
      type: "string",
      name: "inputSpeaker",
      message: "Who said it?"
    }
  ])
  .then(answers => {
    console.log(`${answers.inputSpeaker} says, \"${answers.inputQuote}\"`);
  });
