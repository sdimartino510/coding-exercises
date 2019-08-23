var inquirer = require("inquirer");

console.log("");
console.log("Self Checkout");
console.log("-------------");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputItem1Price",
      message: "What is the price of the first item?"
    },
    {
      type: "number",
      name: "inputItem1Qty",
      message: "What is the quantity of the first item?"
    },
    {
      type: "number",
      name: "inputItem2Price",
      message: "What is the price of the second item?"
    },
    {
      type: "number",
      name: "inputItem2Qty",
      message: "What is the quantity of the second item?"
    },
    {
      type: "number",
      name: "inputItem3Price",
      message: "What is the price of the third item?"
    },
    {
      type: "number",
      name: "inputItem3Qty",
      message: "What is the quantity of the third item?"
    }
  ])
  .then(answers => {
    console.log("");

    const item1Price = answers.inputItem1Price;
    const item1Qty = answers.inputItem1Qty;
    const item2Price = answers.inputItem2Price;
    const item2Qty = answers.inputItem2Qty;
    const item3Price = answers.inputItem3Price;
    const item3Qty = answers.inputItem3Qty;

    const item1Subtotal = itemSubtotal(item1Price, item1Qty);
    const item2Subtotal = itemSubtotal(item2Price, item2Qty);
    const item3Subtotal = itemSubtotal(item3Price, item3Qty);

    const subtotal = item1Subtotal + item2Subtotal + item3Subtotal;
    const tax = totalTax(subtotal);
    const total = subtotal + tax;

    console.log(`Subtotal: $${subtotal}`);
    console.log(`Tax: $${tax.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);

    console.log("");
  });

function itemSubtotal(price, quantity) {
  return price * quantity;
}

function totalTax(subtotal) {
  return (subtotal * 55) / 1000;
}
