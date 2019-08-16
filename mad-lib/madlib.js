var inquirer = require("inquirer");

console.log("");
console.log("Mad Libs!");
console.log("---------");
console.log("");

inquirer
  .prompt([
    {
      type: "input",
      name: "inputNoun",
      message: "Enter a noun:"
    },
    {
      type: "input",
      name: "inputVerb",
      message: "Enter a verb:"
    },
    {
      type: "input",
      name: "inputAdjective",
      message: "Enter an adjective:"
    },
    {
      type: "input",
      name: "inputAdverb",
      message: "Enter an adverb:"
    }
  ])
  .then(answers => {
    console.log(
      `My ${answers.inputAdjective} ${answers.inputNoun} will ${
        answers.inputVerb
      } very ${answers.inputAdverb}. Isn't that dumb?`
    );
  });
