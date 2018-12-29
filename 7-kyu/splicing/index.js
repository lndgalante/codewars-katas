/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    splicing

  Description:
    The object of this kata is to create a function called removeValue that removes all of a certain value from an array using .splice() and then returns the array.
    If the array is empty or has no element to remove it should return false.

  Examples:
    arr = [1, 2, 1, '1', 3]
    arr.removeValue(1); // returns [2, '1', 3]

  Kata Link:
    https://www.codewars.com/kata/splicing

  Discuss Link:
    https://www.codewars.com/kata/splicing/discuss

  Solutions Link:
    https://www.codewars.com/kata/splicing/solutions
*/

// Long Solution
/*
Array.prototype.removeValue = function(thing) {
  if (!this.includes(thing)) return false

  const thingIndexes = this.reduce(
    (indexes, element, index) => (element === thing ? [...indexes, index - indexes.length] : indexes),
    []
  )
  const arrayWithoutThing = [...this]
  thingIndexes.forEach(thingIndex => arrayWithoutThing.splice(thingIndex, 1))

  return arrayWithoutThing
}
*/

// Short Solution
Array.prototype.removeValue = function(thing) {
  if (!this.includes(thing)) return false
  while (this.includes(thing)) this.splice(this.indexOf(thing), 1)

  return this
}

// Function Export
module.exports = Array
