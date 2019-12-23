/* eslint no-undef: 0 */
/* eslint unicorn/new-for-builtins: 0 */

/*
  Title:
    Shorten Me: Array Declaration IV (1-30)

  Description:
    You have to write an array() function returning an array object with elements as follow:
    [ 1,   2,  3,  4,  5,  6,  7,  8,  9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]

  Notes:
    Coding Limitation:
    Less than 40 characters

  Kata Link:
    https://www.codewars.com/kata/shorten-me-array-declaration-iv-1-30

  Discuss Link:
    https://www.codewars.com/kata/shorten-me-array-declaration-iv-1-30/discuss

  Solutions Link:
    https://www.codewars.com/kata/shorten-me-array-declaration-iv-1-30/solutions
*/

// Long Solution
array = () => [...Array(30)].map((_, i) => ++i)

// Ramda Solution
/*
array = () => require('ramda').range(1, 31)
*/

// Function Export
module.exports = array
