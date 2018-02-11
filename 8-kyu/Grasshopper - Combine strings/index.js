/*
  Title:
    Grasshopper - Combine strings

  Description:
    Create a function named combineNames(combine_names in python, ruby) that accepts two parameters (first and last name).
    The function should return the full name.

  Examples:
    combineNames('James', 'Stevens')
      // => It should return 'James Stevens'

  Kata Link:
    https://www.codewars.com/kata/grasshopper-combine-strings

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-combine-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-combine-strings/solutions
*/

// Long Solution
// const combineNames = (firstName, lastName) => `${firstName} ${lastName}`

// Short Solution
const combineNames = (...names) => names.join(' ')

// Function Export
module.exports = combineNames
