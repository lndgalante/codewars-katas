/*
  Title:
    Find Multiples of a Number

  Description:
    In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit.
    If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0.
    The limit will always be higher than the base.

    For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

    If you can, try writing it in only one line of code.In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit.
    If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

    For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

    If you can, try writing it in only one line of code.

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/find-multiples-of-a-number

  Discuss Link:
    https://www.codewars.com/kata/find-multiples-of-a-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-multiples-of-a-number/solutions
*/

// Long Solution
/*
function findMultiples(integer, limit) {
  const result = []

  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      result.push(i)
    }
  }

  return result
}
*/

// Short Solution
function findMultiples(integer, limit) {
  const result = []

  for (let i = integer; i <= limit; i += integer) {
    result.push(i)
  }

  return result
}

// Function Export
module.exports = findMultiples
