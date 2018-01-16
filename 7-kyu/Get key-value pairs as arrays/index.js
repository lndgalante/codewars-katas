/*
  Title:
    Get key/value pairs as arrays

  Description:
    Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

  Examples:
    keysAndValues({a: 1, b: 2, c: 3})
      // should return [['a', 'b', 'c'], [1, 2, 3]]

  Notes:
    Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
/*
function keysAndValues(data) {
  const keys = []
  const values = []

  for (const key in data) {
    keys.push(key)
    values.push(data[key])
  }

  return [keys, values]
}
*/

// Short Solution 1
/*
const keysAndValues = data => [Object.keys(data), Object.values(data)]
It works but this kata doesn't have support for Node 8.1.3
*/

// Short Solution 2
const keysAndValues = data => [
  Object.keys(data),
  Object.keys(data).map(key => data[key]),
]

// Function Export
module.exports = keysAndValues
