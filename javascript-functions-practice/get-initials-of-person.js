/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initialsResult = person.firstName[0] + person.lastName[0];
  return initialsResult;
}
