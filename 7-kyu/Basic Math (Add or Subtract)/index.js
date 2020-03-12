/*
  Title:
    Basic Math (Add or Subtract)

  Description:
    In this kata, you will do addition and subtraction on a given string.
    The return value must be also a string.

  Examples:
    "1plus2plus3plus4"  --> "10"
    "1plus2plus3minus4" -->  "2"

  Notes:
    The input will not be empty.

  Kata Link:
    https://www.codewars.com/kata/basic-math-add-or-subtract

  Discuss Link:
    https://www.codewars.com/kata/basic-math-add-or-subtract/discuss

  Solutions Link:
    https://www.codewars.com/kata/basic-math-add-or-subtract/solutions
*/

// Long Solution
/*
const operations = { plus: '+', minus: '-' }

const calculate = str => String(eval(str.replace(/plus|minus/g, operation => operations[operation])))
*/

// Safer Solution
const calculate = string =>
  String(
    string
      .split('plus')
      .join(' ')
      .split('minus')
      .join(' -')
      .split(' ')
      .reduce((total, number) => total + Number(number), 0)
  )

// Function Export
module.exports = calculate
