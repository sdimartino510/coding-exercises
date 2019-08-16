var inquirer = require("inquirer");

console.log("");
console.log("Room Area Calculator");
console.log("--------------------");

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
    const length = answers.inputRoomLength;
    const width = answers.inputRoomWidth;
    const roomAreaFeet = roomArea(length, width);
    const roomAreaMeters = roomAreaInMeters(roomAreaFeet);
    console.log(`You entered dimensions of ${length} feet by ${width} feet.`);
    console.log("");
    console.log("The area of the room is:");
    console.log(`${roomAreaFeet} square feet`);
    console.log(`${roomAreaMeters} square meters`);
    console.log("");
  });

function roomArea(l, w) {
  return l * w;
}

function roomAreaInMeters(roomAreaFeet) {
  return (roomAreaFeet * 9290304) / 100000000;
}
