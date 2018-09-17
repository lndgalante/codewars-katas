/*
  Title:
    Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product

  Description:
    Count the number of exclamation marks and question marks, return the product.

  Examples:
    Product("") == 0
    product("!") == 0
    Product("!ab? ?") == 2
    Product("!!") == 0
    Product("!??") == 2
    Product("!???") == 3
    Product("!!!??") == 6
    Product("!!!???") == 9
    Product("!???!!") == 9
    Product("!????!!!?") == 20

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-13-count-the-number-of-exclamation-marks-and-question-marks-return-the-product

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-13-count-the-number-of-exclamation-marks-and-question-marks-return-the-product/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-13-count-the-number-of-exclamation-marks-and-question-marks-return-the-product/solutions
*/

// Long Solution
/*
const product = s => {
  const stringSplit = s.split('')

  const exclamationMarks = stringSplit.reduce(
    (total, char) => (char === '!' ? total + 1 : total),
    0
  )

  const questionMarks = stringSplit.reduce(
    (total, char) => (char === '?' ? total + 1 : total),
    0
  )

  return exclamationMarks * questionMarks
}
*/

// Short Solution
const product = s =>
  (s.match(/!/g) || []).length * (s.match(/\?/g) || []).length

// Function Export
module.exports = product
