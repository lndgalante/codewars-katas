/*
  Title:
    Add Length

  Description:
    What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
    Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.

  Examples:
    addLength('apple ban') => ["apple 5", "ban 3"]
    addLength('you will win') => ["you 3", "will 4", "win 3"]

  Notes:
    String will have at least one element; words will always be separated by a space.

  Kata Link:
    https://www.codewars.com/kata/add-length

  Discuss Link:
    https://www.codewars.com/kata/add-length/discuss

  Solutions Link:
    https://www.codewars.com/kata/add-length/solutions
*/

// Long Solution
const addLength = str => str.split(' ').map(word => `${word} ${word.length}`)

// Function Export
module.exports = addLength
