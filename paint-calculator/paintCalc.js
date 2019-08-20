var inquirer = require("inquirer");

console.log("");
console.log("Paint Area Calculator");
console.log("---------------------");

inquirer
  .prompt([
    {
      type: "number",
      name: "inputRoomLength",
      message: "What is the length of the room in feet?"
    },
    {
      type: "number",
      name: "inputRoomWidth",
      message: "What is the width of the room in feet?"
    }
  ])
  .then(answers => {
    console.log("");

    const roomLength = answers.inputRoomLength;
    const roomWidth = answers.inputRoomWidth;
    const area = roomArea(roomLength, roomWidth);
    const paint = gallons(area);

    console.log(
      `You will need to purchase ${paint} gallons of paint to cover ${area} square feet.`
    );

    console.log("");
  });

function roomArea(l, w) {
  return l * w;
}

function gallons(area) {
  return Math.ceil(area / 350);
}
