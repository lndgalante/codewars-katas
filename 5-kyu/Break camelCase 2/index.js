/* 
  Title:
    Break camelCase

  Description:
    Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.

  Examples:
    "hello case".camelCase() => HelloCase
    "camel case word".camelCase() => CamelCaseWord
  
  Link:
    https://www.codewars.com/kata/5208f99aee097e6552000148
*/

String.prototype.camelCase = function() {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// Function Export
module.exports = String.prototype.camelCase
