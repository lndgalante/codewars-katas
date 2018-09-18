/*
  Title:
    Filter unused digits

  Description:
    Given few numbers, you need to print out the digits that are not being used.

  Examples:
    unusedDigits(12, 34, 56, 78) // "09"
    unusedDigits(2015, 8, 26) // "3479"

  Notes:
    - Result string should be sorted
    - The test case won't pass Integer with leading zero

  Kata Link:
    https://www.codewars.com/kata/filter-unused-digits

  Discuss Link:
    https://www.codewars.com/kata/filter-unused-digits/discuss

  Solutions Link:
    https://www.codewars.com/kata/filter-unused-digits/solutions
*/

// Long Solution
/*
const unusedDigits = (...digits) => {
  const digitsArray = digits.join('').split('')
  const digitsWithoutRepetitions = [...new Set(digitsArray)]

  return Array.from({ length: 10 }, (_, index) => String(index))
    .filter(digit => !digitsWithoutRepetitions.includes(digit))
    .join('')
}
*/

// Short Solution
const unusedDigits = (...digits) =>
  '0123456789'.replace(new RegExp(`[${digits}]`, 'g'), '')

// Function Export
module.exports = unusedDigits
