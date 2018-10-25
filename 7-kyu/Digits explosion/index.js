/*
  Title:
    Digits explosion

  Description:
    Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

  Examples:
    Digits.Explode("312") = "333122"
    Digits.Explode("102269") = "12222666666999999999"

  Kata Link:
    https://www.codewars.com/kata/digits-explosion

  Discuss Link:
    https://www.codewars.com/kata/digits-explosion/discuss

  Solutions Link:
    https://www.codewars.com/kata/digits-explosion/solutions
*/

// Long Solution
/*
const explode = s => [...s].map(number => number.repeat(number)).join('')
*/

// Short Solution
const explode = s => s.replace(/\d/g, number => number.repeat(number))

// Function Export
module.exports = explode
