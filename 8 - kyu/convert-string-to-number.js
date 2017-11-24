/* 
  Title:
    Convert a String to a Number!

  Description:
    We need a function that can transform a string into a number.
    What ways of achieving this do you know?

  Examples:
    stringToNumber("1234") == 1234
    stringToNumber("605" ) == 605
    stringToNumber("1405") == 1405
    stringToNumber("-7"  ) == -7

  Notes:
    Don't worry, all inputs will be strings, and every string is a perfectly 
    valid representation of an integral number.
  
  Link:
    https://www.codewars.com/kata/convert-a-string-to-a-number
*/

// Long Solution
// function stringToNumber(str) {
//   return Number(str)
// }

// Short Solution
const stringToNumber = str => Number(str)

// Test to pass
console.log(stringToNumber('1234'))
// => It should return 1234
console.log(stringToNumber('605'))
// => It should return 605
console.log(stringToNumber('1405'))
// => It should return 1405
console.log(stringToNumber('-7'))
// => It should return -7
