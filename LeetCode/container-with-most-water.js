const containerWithMostWater = (heightArr) => {
  heightArr.splice(0, 0, 0);
  let currentMax = 0;
  let potentialMax = 0;

  for (let i = 1; i < heightArr.length; i++) {
    for (let j = 1; j < heightArr.length; j++) {
      let maxHeight = heightArr[i];
      if (maxHeight <= heightArr[j]) {
        potentialMax = maxHeight * (j - i);
        if (potentialMax > currentMax) {
          currentMax = potentialMax;
        }
      } else if (maxHeight > heightArr[j]) {
        maxHeight = heightArr[j];
        potentialMax = maxHeight * (j - i);
        if (potentialMax > currentMax) {
          currentMax = potentialMax;
        }
      }
    }
  }
  return currentMax;
}

console.log(containerWithMostWater([5, 2, 3, 4])); // Largest rectangle possible is a 4x3.
console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7])); // Largest rectangle possible is a 7x7.