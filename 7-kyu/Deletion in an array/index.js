/* eslint no-sequences: 0 */

/*
  Title:
    Deletion in an array

  Description:
    The deleteValues function takes an array and removes elements that answer true to the pred function.
    For some reason, some of the elements of the array for which the predicate holds are not deleted...
    Can you fix the code?

  Kata Link:
    https://www.codewars.com/kata/deletion-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/deletion-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/deletion-in-an-array/solutions
*/

// Long Solution
/*
const deleteValues = (array, pred) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (pred(array[index])) array.splice(index, 1)
  }

  return array
}
*/

// Short Solution
const deleteValues = (array, pred) => (array.filter(pred).forEach(number => array.splice(array.indexOf(number), 1)), array)

// Function Export
module.exports = deleteValues
