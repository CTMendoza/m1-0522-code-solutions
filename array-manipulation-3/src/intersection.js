/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  for (const element of first) {
    if (!newArray.includes(element) && second.includes(element)) {
      newArray.push(element);
    }
  }
  for (const element of second) {
    if (!newArray.includes(element) && first.includes(element)) {
      newArray.push(element);
    }
  } return newArray;
}
