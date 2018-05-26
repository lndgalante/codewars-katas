/* eslint unicorn/prefer-spread: 0 */

/*
  Title:
    Reversed sequence

  Description:
    Get the number n to return the reversed sequence from n to 1.

  Examples:
    n=5 >> [5,4,3,2,1]

  Kata Link:
    https://www.codewars.com/kata/reversed-sequence

  Discuss Link:
    https://www.codewars.com/kata/reversed-sequence/discuss

  Solutions Link:
    https://www.codewars.com/kata/reversed-sequence/solutions
*/

// Long Solution
const reverseSeq = n => Array.from({ length: n }, (_, i) => n - i)

// Function Export
module.exports = reverseSeq
