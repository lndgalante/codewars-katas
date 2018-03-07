/*
  Title:
    Get number from string

  Description:
    Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

  Kata Link:
    https://www.codewars.com/kata/get-number-from-string

  Discuss Link:
    https://www.codewars.com/kata/get-number-from-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-number-from-string/solutions
*/

// Long Solution
const getNumberFromString = s => Number(s.match(/\d/g).join(''))

// Function Export
module.exports = getNumberFromString
