/* 
  Title:
    Exes and Ohs

  Description:
    Check to see if a string has the same amount of 'x's and 'o's. 
    The method must return a boolean and be case insensitive.
    The string can contains any char.

  Examples:
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
  
  Link:
    https://www.codewars.com/kata/exes-and-ohs
*/

// Long Solution
// function XO(str) {
//   const totalX = str.split('').filter(char => /x/gi.test(char)).length
//   const totalO = str.split('').filter(char => /o/gi.test(char)).length

//   return totalX === totalO
// }

// Short Solution
const XO = str =>
  (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length

// Test to pass
console.log(XO('xo'))
// => It should return true
console.log(XO('xxOo'))
// => It should return true
console.log(XO('xxxm'))
// => It should return false
console.log(XO('Oo'))
// => It should return false
console.log(XO('ooom'))
// => It should return false
