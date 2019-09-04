var inquirer = require("inquirer");

console.log("");
console.log("Tax Calculator");
console.log("--------------");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputOrderAmount",
      message: "What is the order amount?"
    },
    {
      type: "string",
      name: "inputState",
      message: "What is the state?"
    }
  ])
  .then(answers => {
    console.log("");

    const orderAmount = answers.inputOrderAmount;
    const state = answers.inputState;
    // let tax = "";

    if (state === "WI") {
      var tax = (orderAmount * 55) / 1000;
      var total = orderAmount + tax;
      console.log(`The subtotal is $${orderAmount.toFixed(2)}.`);
      console.log(`The tax is $${tax.toFixed(2)}.`);
      console.log(`The total is $${total.toFixed(2)}.`);
    } else {
      console.log(`The total is $${orderAmount.toFixed(2)}`);
    }
  });
