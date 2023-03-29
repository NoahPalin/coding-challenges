const merge = function (list1, list2) {
  let result = [];
  while (list1.length > 0 || list2.length > 0) {
    if (list1[0] < list2[0]) {
      result.push(list1[0]);
      list1.splice(0, 1);
    } else if (list1[0] > list2[0]) {
      result.push(list2[0]);
      list2.splice(0, 1);
    } else if (list1[0] === list2[0]) {
      result.push(list1[0]);
      result.push(list2[0]);
      list1.splice(0, 1);
      list2.splice(0, 1);
    } else if (list2.length === 0) {
      result = result.concat(list1);
      list1 = [];
    } else if (list1.length === 0) {
      result = result.concat(list2);
      list2 = [];
    }
  }
  return result;
}

console.log(merge([1, 2, 3, 7, 9], [1, 5, 6, 6, 8])); // Prints [1, 1, 2, 3, 5, 6, 6, 7, 8, 9]