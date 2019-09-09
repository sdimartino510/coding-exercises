var inquirer = require("inquirer");

console.log("");
console.log("Password Validator");
console.log("------------------");
console.log("");

inquirer
  .prompt([
    {
      type: "password",
      name: "inputPassword",
      message: "Please enter your password:"
    }
  ])
  .then(answers => {
    console.log("");

    const password = answers.inputPassword;

    if (password === "123456") {
      console.log("Welcome!");
    } else {
      console.log("I don't know you.");
    }

    console.log("");
  });
