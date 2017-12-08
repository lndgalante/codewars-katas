/* 
  Description:
    Complete the solution so that the function will break up camel casing, using a space between words.

  Example:
    solution('camelCasing') // => should return 'camel Casing'
  
  Link:
    https://www.codewars.com/kata/break-camelcase/javascript
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
