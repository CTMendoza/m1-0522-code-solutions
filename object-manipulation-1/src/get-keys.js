/* exported getKeys */
// define a new function named getKeys
//  declare one paramter named object
// assign an empty array to variable keys
// loop through object and assign object key names to getKeys

function getKeys(object) {
  var keys = [];
  for (const x in object) {
    keys.push(x);

  }
  return keys;
}
