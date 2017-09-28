/* 
  Description ⚔️
    Complete the solution so that the function will break up camel casing, using a space between words.

  Example
    solution('camelCasing') // => should return 'camel Casing'
*/

// Long solution
function breakCamelCase(string) {
  return string
    .split('')
    .map(char => (char === char.toUpperCase() ? ` ${char}` : char))
    .join('')
}

// Test to pass
console.log(breakCamelCase('camelCasing')) // => It should return "camel Casing"
