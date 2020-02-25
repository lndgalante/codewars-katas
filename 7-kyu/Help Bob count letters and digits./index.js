/*
  Title:
    Help Bob count letters and digits.

  Description:
    Bob is a lazy man.
    He needs you to create a method that can determine how many letters and digits are in a given string.

  Examples:
    "hel2!lo" --> 6
    "wicked .. !" --> 6
    "!?..A" --> 1

  Kata Link:
    https://www.codewars.com/kata/5738f5ea9545204cec000155

  Discuss Link:
    https://www.codewars.com/kata/5738f5ea9545204cec000155/discuss

  Solutions Link:
    https://www.codewars.com/kata/5738f5ea9545204cec000155/solutions
*/

// Long Solution
const countLettersAndDigits = (input) => (input.match(/\d|[a-z]/gi) || []).length

// Function Export
module.exports = countLettersAndDigits
