/*
  Title:
    Counting Array Elements

  Description:
    Write a function that takes an array and counts the number of each unique element present.

  Examples:
    count(['james', 'james', 'john'])
    #=> { 'james': 2, 'john': 1}

  Kata Link:
    https://www.codewars.com/kata/counting-array-elements

  Discuss Link:
    https://www.codewars.com/kata/counting-array-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/counting-array-elements/solutions
*/

// Long Solution
const count = array =>
  array.reduce((result, element) => {
    result[element] = result[element] ? result[element] + 1 : 1
    return result
  }, {})

// Lodash Solution
/*
const { countBy: count } = require('lodash')
*/

// Function Export
module.exports = count
