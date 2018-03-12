/*
  Title:
    Unicode Total

  Description:
    You'll be given a string, and have to return the total of all the unicode characters as an int.
    Should be able to handle any characters sent at it.

  Examples:
    uniTotal("a") == 97
    uniTotal("aaa") == 291

  Kata Link:
    https://www.codewars.com/kata/unicode-total

  Discuss Link:
    https://www.codewars.com/kata/unicode-total/discuss

  Solutions Link:
    https://www.codewars.com/kata/unicode-total/solutions
*/

// Long Solution
/*
const uniTotal = str =>
  str
    .split('')
    .map(str => str.charCodeAt(0))
    .reduce((total, char) => total + char, 0)
*/

// Short Solution
const uniTotal = str =>
  [...str].reduce((total, char) => total + char.charCodeAt(0), 0)

// Function Export
module.exports = uniTotal
