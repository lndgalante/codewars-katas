/*
  Description:
    Complete the solution so that the function will break up camel casing, using a space between words.

  Example:
    solution('camelCasing') // => should return 'camel Casing'

  Kata Link:
    https://www.codewars.com/kata/break-camelcase

  Discuss Link:
    https://www.codewars.com/kata/zero-fill-dot-dot-dot-for-the-queen/discuss

  Solutions Link:
    https://www.codewars.com/kata/zero-fill-dot-dot-dot-for-the-queen/solutions
*/

// Long solution
/*
function breakCamelCase(string) {
  return string
    .split('')
    .map(char => (char === char.toUpperCase() ? ` ${char}` : char))
    .join('')
}
*/

// Short solution
const breakCamelCase = string => string.replace(/([A-Z])/g, ' $1')

// Function Export
module.exports = breakCamelCase
