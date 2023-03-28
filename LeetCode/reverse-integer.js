const reverseInt = function (number) {
  const numberArray = Array.from(String(number), Number);
  let result = [];
  let negativeNum = false;

  if (isNaN(numberArray[0])) {
    negativeNum = true;
    numberArray.shift();
  }

  for (let i = numberArray.length; i >= 0; i--) {
    result.push(numberArray[i]);
  }

  if (negativeNum) {
    return '-' + result.join('');
  } else {
    return result.join('');
  }
}

console.log(reverseInt(12345));
console.log(reverseInt(-456));