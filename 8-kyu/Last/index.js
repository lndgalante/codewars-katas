/* eslint no-unused-vars: 0 */
/* eslint prefer-rest-params: 0 */

/*
  Title:
    Last

  Description:
    Find the last element of a list.

  Examples:
    last( [1,2,3,4] ) // => 4
    last( "xyz" )     // => z
    last( 1,2,3,4 )   // => 4

  Notes:
    In javascript and CoffeeScript a list will be
      * an array
      * a string
      * a list of arguments

  Kata Link:
    https://www.codewars.com/kata/last

  Discuss Link:
    https://www.codewars.com/kata/last/discuss

  Solutions Link:
    https://www.codewars.com/kata/last/solutions
*/

// Long Solution
function last(list) {
  const last = arguments[arguments.length - 1]
  return last[last.length - 1] || last
}

// Function Export
module.exports = last
