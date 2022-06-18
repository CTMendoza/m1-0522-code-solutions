/* exported pick */
// define function pick
// declare two parameters source and key
// assign an empty object to a new variable
function pick(source, keys) {
  var newObject = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    if (sourceKeys.includes(keys[i]) && typeof source[keys[i]] !== 'undefined') {
      newObject[keys[i]] = source[keys[i]];
    }
  } return newObject;
}
