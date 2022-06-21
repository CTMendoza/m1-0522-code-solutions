/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      newArray.push(first[i], second[i]);
    }
  } else if (first.length >= second.length) {
    for (var c = 0; c < second.length; c++) {
      newArray.push(first[c], second[c]);
    }
  } return newArray;
}
