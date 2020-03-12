/*
  Title:
    Split Strings

  Description:
    Complete the solution so that it splits the string into pairs of two characters.
    If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  Examples:
    solution('abc') // should return ['ab', 'c_']
    solution('abcdef') // should return ['ab', 'cd', 'ef']

  Notes:

  Kata Link:
    https://www.codewars.com/kata/split-strings

  Discuss Link:
    https://www.codewars.com/kata/split-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/split-strings/solutions
*/

// Long Solution
/*
function solution(str) {
  return str
    .split(/([A-Z][A-Z])/gi)
    .filter(Boolean)
    .map(char => (char.length % 2 === 0 ? char : `${char}_`))
}
*/

// Short Solution
const solution = string => `${string}_`.match(/../g)

// Function Export
module.exports = solution
