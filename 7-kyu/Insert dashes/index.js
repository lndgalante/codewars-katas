/*
  Title:
    Insert dashes

  Description:
    Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num.

  Examples:
    If num is 454793 the output should be 4547-9-3.

  Notes:
    Don't count zero as an odd number.

  Kata Link:
    https://www.codewars.com/kata/insert-dashes

  Discuss Link:
    https://www.codewars.com/kata/insert-dashes/discuss

  Solutions Link:
    https://www.codewars.com/kata/insert-dashes/solutions
*/

// Long Solution
/*
const isOdd = number => number % 2 !== 0

const insertDash = num =>
  String(num)
    .split('')
    .map((num, index, array) => {
      const actual = Number(num)
      const next = Number(array[index + 1])

      if (index === array.length - 1) return actual
      return isOdd(actual) && isOdd(next) ? `${actual}-` : actual
    })
    .join('')
*/

// Short Solution
const insertDash = number => `${number}`.replace(/([13579])(?=[13579])/g, '$1-')

// Function Export
module.exports = insertDash
