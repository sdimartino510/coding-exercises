var inquirer = require("inquirer");

console.log("");
console.log("Currency Convertor");
console.log("------------------");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputEuros",
      message: "How many Euros are you exchanging?"
    },
    {
      type: "number",
      name: "inputExchangeRate",
      message: "What is the exchange rate?"
    }
  ])
  .then(answers => {
    console.log("");

    const euros = answers.inputEuros;
    const exchangeRate = answers.inputExchangeRate;
    const dollars = exchange(euros, exchangeRate);

    console.log(
      `${euros} Euros at an exchange rate of ${exchangeRate} is ${dollars.toFixed(
        2
      )} U.S. Dollars.`
    );

    console.log("");
  });

function exchange(euros, exchangeRate) {
  return Math.ceil(euros * exchangeRate) / 100;
}
