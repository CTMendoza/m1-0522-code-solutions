/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (const x in source) {
    newObject[x] = source[x];
  }
  var newObjectKeys = Object.keys(newObject);
  for (var i = 0; i < keys.length; i++) {
    if (newObjectKeys.includes(keys[i])) {
      delete newObject[keys[i]];
    }
  } return newObject;
}
