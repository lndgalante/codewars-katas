/*
  Title:
    Name Array Capping

  Description:
    Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

  Examples:
    capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
    capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

  Kata Link:
    https://www.codewars.com/kata/name-array-capping/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/name-array-capping/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/name-array-capping/train/javascript/solutions
*/

// Long Solution
const capMe = names =>
  names.map(
    name => `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`
  )

// Function Export
module.exports = capMe
