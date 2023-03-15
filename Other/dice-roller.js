


const rollFormatter = function (rollCount, dice1, dice2, extra = "") {

  const result = `RollNo : ${rollCount} - Dice1: ${dice1} - Dice2: ${dice2} - Total: 9 - Extra= ${extra}`;
  console.log(result);
};


for (let rollCount = 0; rollCount <= 100; rollCount++) {

  // Generates and integer from 1 to 6.
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let total = dice1 + dice2;

  switch (total) {
    case (total % 3 === 0 && total % 4 === 0):
      rollFormatter(rollCount, dice1, dice2, "OreWheat")
    case (total % 3 === 0):
      rollFormatter(rollCount, dice1, dice2, "Ore")
    case (total % 4 === 0):
      rollFormatter(rollCount, dice1, dice2, "Wheat")
    case (total % 5 === 0):
      rollFormatter(rollCount, dice1, dice2, "Sheep")
  }

};