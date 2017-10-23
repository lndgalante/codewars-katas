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

// Test to pass
console.log('test case'.camelCase())
// => It should return "TestCase"
console.log('camel case method'.camelCase())
// => It should return "CamelCaseMethod"
console.log('say hello '.camelCase())
// => It should return "SayHello"
console.log(' camel case word'.camelCase())
// => It should return "CamelCaseWord"
console.log(''.camelCase())
// => It should return ""
