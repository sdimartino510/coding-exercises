var inquirer = require("inquirer");

console.log("");
console.log("Blood Alcohol Calculator");
console.log("------------------------");
console.log("");

inquirer
  .prompt([
    {
      type: "list",
      name: "inputGender",
      message: "Please select your gender:",
      choices: ["Male", "Female"]
    },
    {
      type: "number",
      name: "inputWeight",
      message: "What is your weight in pounds?"
    },
    {
      type: "number",
      name: "inputNumOfDrinks",
      message: "How many drinks have you had?"
    },
    {
      type: "number",
      name: "inputOuncesOfAlcohol",
      message: "How many ounces of alcohol in each drink?"
    },
    {
      type: "number",
      name: "inputHoursSinceLastDrink",
      message: "How many hours has it been since your last drink?"
    }
  ])
  .then(answers => {
    console.log("");

    const gender = answers.inputGender === "Male" ? 73 / 100 : 66 / 100;
    const weight = answers.inputWeight;
    const numOfDrinks = answers.inputNumOfDrinks;
    const ouncesOfAlcohol = answers.inputOuncesOfAlcohol;
    const hoursSinceLastDrink = answers.inputHoursSinceLastDrink;

    const totalAlcohol = numOfDrinks * ouncesOfAlcohol;

    const bac =
      ((totalAlcohol * (514 / 100)) / weight) * gender -
      (15 / 1000) * hoursSinceLastDrink;

    console.log(`Your BAC is ${bac.toFixed(2)}.`);

    if (bac >= 8 / 1000) {
      console.log("It is not legal for you to drive at this time.");
    } else {
      console.log("It is legal for you to drive.");
    }

    console.log("");
  });
