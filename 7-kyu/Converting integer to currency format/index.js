/*
  Title:
    Converting integer to currency format

  Description:
    Write a function that takes an integer in input and outputs a string with currency format.

    Integer in currency format is expressed by a string of number where every three characters are separated by comma.

  Examples:
    123456 --> "123,456"

  Notes:
    Input will always be an positive integer, so don't worry about type checking or negative/float values.

  Kata Link:
    https://www.codewars.com/kata/converting-integer-to-currency-format

  Discuss Link:
    https://www.codewars.com/kata/converting-integer-to-currency-format/discuss

  Solutions Link:
    https://www.codewars.com/kata/converting-integer-to-currency-format/solutions
*/

// Long Solution
const toCurrency = price => String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1,')

// Short Solution
// This will need intl dependency in order to work
// const toCurrency = price => price.toLocaleString()

// Function Export
module.exports = toCurrency
