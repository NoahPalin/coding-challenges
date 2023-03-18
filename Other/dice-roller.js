const rollFormatter = function (rollCount, dice1, dice2, extra = "") {

  // Formats then prints the result.
  const result = `RollNo : ${rollCount} - Dice1: ${dice1} - Dice2: ${dice2} - Total: 9 - Extra= ${extra}`;
  console.log(result);
};


for (let rollCount = 1; rollCount <= 100; rollCount++) {

  // Generates and integer from 1 to 6.
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let total = dice1 + dice2;

  // Checks for multiples.
  if (total % 3 === 0 && total % 4 === 0) {

    // Call helper function.
    rollFormatter(rollCount, dice1, dice2, "OreWheat");
  } else if (total % 3 === 0) {

    rollFormatter(rollCount, dice1, dice2, "Ore")
  } else if (total % 4 === 0) {

    rollFormatter(rollCount, dice1, dice2, "Wheat")
  } else if (total % 5 === 0) {

    rollFormatter(rollCount, dice1, dice2, "Sheep")
  } else {

    // Called when total is not a multiple of 3, 4, or 5.
    rollFormatter(rollCount, dice1, dice2)
  }
};