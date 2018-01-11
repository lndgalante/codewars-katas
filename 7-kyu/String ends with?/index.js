/*
  Title:
    String ends with?

  Description:
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

  Examples:
    solution('abc', 'bc')
      // returns true
    solution('abc', 'd')
      // returns false

  Kata Link:
    https://www.codewars.com/kata/string-ends-with

  Discuss Link:
    https://www.codewars.com/kata/string-ends-with/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-ends-with/solutions
*/

// Short Solution
const solution = (str, ending) => str.endsWith(ending)

// Function Export
module.exports = solution
