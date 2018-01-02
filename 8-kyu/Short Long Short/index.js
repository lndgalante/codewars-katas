/*
  Title:
    Short Long Short

  Description:
    Given 2 strings, a and b, return a string of the form short+long+short,
    with the shorter string on the outside and the longer string on the inside.
    The strings will not be the same length, but they may be empty (length0).

  Examples:
    solution("1", "22")
      // returns "1221"
    solution("22", "1")
      // returns "1221"

  Kata Link:
    https://www.codewars.com/kata/short-long-short

  Discuss Link:
    https://www.codewars.com/kata/short-long-short/discuss

  Solutions Link:
    https://www.codewars.com/kata/short-long-short/solutions
*/

// Long Solution
/*
function solution(...numbers) {
  const numbersSorted = numbers.sort((a, b) => a.length > b.length)
  return `${numbersSorted[0]}${numbersSorted[1]}${numbersSorted[0]}`
}
*/

// Short Solution
const solution = (a, b) => (a.length < b.length ? a + b + a : b + a + b)

// Function Export
module.exports = solution
