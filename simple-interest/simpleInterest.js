var inquirer = require("inquirer");

console.log("");
console.log("Simple Interest Calculator");
console.log("--------------------------");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputPrincipal",
      message: "Enter the principal amount:"
    },
    {
      type: "number",
      name: "inputInterest",
      message: "Enter the interest rate:"
    },
    {
      type: "number",
      name: "inputDuration",
      message: "Enter the duration of the investment in years:"
    }
  ])
  .then(answers => {
    console.log("");

    const principal = answers.inputPrincipal;
    const interestPercent = answers.inputInterest;
    const duration = answers.inputDuration;
    const interest = interestPercent / 100;

    const investmentReturn = calculateInvestmentReturn(
      principal,
      interest,
      duration
    );

    console.log(
      `After ${duration} years at ${interestPercent}%, the investment will be worth $${investmentReturn.toFixed(
        2
      )}.`
    );

    console.log("");
  });

function calculateInvestmentReturn(principal, interest, duration) {
  return principal * (interest * duration + 1);
}
