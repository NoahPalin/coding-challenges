// INCOMPLETE
const longestPalindrome = function (string) {
  const stringArray = string.split('');

  for (let i = 0; i < string.length; i++) {
    const currentArr = stringArray.splice(i)
    const currentReverseArr = currentArr.reverse();

    const currentStr = currentArr.join('');
    const currentReverseStr = currentReverseArr.join('');

    console.log(currentStr);
    console.log(currentReverseStr);

    // if (current === currentReverse) {
    //   longest = current;
    // }

  }

  // console.log(current);
};

longestPalindrome('ABCDEFG');