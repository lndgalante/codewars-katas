/* eslint no-return-assign: 0 */
/* eslint no-sequences: 0 */

/*
  Title:
    Empty that array!

  Description:
    Today's task is to write a function empty(), which take an array as argument.
    This function should return the same array, but empty.

    To make it even more fun, you are not allowed to use any kind of loop (nor recursion)
    Good luck!

  Kata Link:
    https://www.codewars.com/kata/empty-that-array

  Discuss Link:
    https://www.codewars.com/kata/empty-that-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/empty-that-array/solutions
*/

// Long Solution
const empty = array => ((array.length = 0), array)

// Function Export
module.exports = empty
