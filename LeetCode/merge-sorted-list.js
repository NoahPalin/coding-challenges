const merge = function (list1, list2) {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      
      if (list1[i] < list2[j]) {
        result.push(list1[i]);
      } else {
        result.push(list2[i]);
      }
      break;
    }
    return result;
  }
}

console.log(merge([1, 2, 3], [2, 5, 6]));