var inquirer = require("inquirer");

console.log("");
console.log("Retirement Calculator!");
console.log("----------------------");
console.log("");

const year = new Date().getFullYear();

inquirer
  .prompt([
    {
      type: "number",
      name: "inputAge",
      message: "What is your current age?"
    },
    {
      type: "number",
      name: "inputRetireAge",
      message: "At what age would you like to retire?"
    }
  ])
  .then(answers => {
    var retireIn = retireYears(answers.inputAge, answers.inputRetireAge);

    console.log(
      `You have ${retireIn} years left until you can retire.\nIt's ${year}, so you can retire in the year ${retireYear(
        year,
        retireIn
      )}.`
    );
  })
  .catch(error => {
    console.error("onRejected function called: " + error.message);
  });

function retireYears(inputAge, inputRetireAge) {
  var retireIn = inputRetireAge - inputAge;
  return retireIn;
}

function retireYear(year, retireIn) {
  return year + retireIn;
}
