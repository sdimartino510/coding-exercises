var inquirer = require("inquirer");

console.log("");
console.log("Driving Age Verifier");
console.log("--------------------");
console.log("");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputAge",
      message: "How old are you?"
    }
  ])
  .then(answers => {
    console.log("");

    const age = answers.inputAge;

    var canDrive =
      age >= 16
        ? "Congratulations! You're old enough to drive."
        : "You can't drive yet. Wah-wah!";

    console.log(canDrive);

    console.log("");
  });
