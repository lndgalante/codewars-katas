/*
  Title:
    List to Array

  Description:
    Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

    Here's an example of a list:

    {value: 1, next: {value: 2, next: {value: 3, next: null}}}
    Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

    [1, 2, 3]
    Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

  Kata Link:
    https://www.codewars.com/kata/list-to-array

  Discuss Link:
    https://www.codewars.com/kata/list-to-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/list-to-array/solutions
*/

// Long Solution
/*
const listToArray = (list, result = []) => {
  for (const key in list) {
    if (key === 'value') result.push(list[key])
    if (key === 'next') listToArray(list[key], result)
  }

  return result
}
*/

// Long Solution II
/*
function listToArray(list) {
  const array = []
  for (let node = list; node; node = node.next) array.push(node.value)

  return array
}
*/

// Short Solution
const listToArray = list =>
  list === null ? [] : [list.value].concat(listToArray(list.next))

// Function Export
module.exports = listToArray
