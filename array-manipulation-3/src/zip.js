/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      var subArray = [];
      subArray.push(first[i], second[i]);
      newArray.push(subArray);
    }
  } else if (first.length >= second.length) {
    for (var c = 0; c < second.length; c++) {
      subArray = [];
      subArray.push(first[c], second[c]);
      newArray.push(subArray);
    }
  } return newArray;
}
