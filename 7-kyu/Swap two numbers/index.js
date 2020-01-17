/* eslint no-return-assign: 0 */

/*
  Title:
    Swap two numbers

  Description:
    Write a swap function to swap 2 integers in place

    In other words, I want you to write the equivalent of
    swap = ary => {
      tmp = ary[0]
      ary[0] = ary[1]
      ary[1] = tmp
    }

    But without the tmp !

  Notes:
    - The input parameter is an integer array with 2 elements. ary.length == 2
    - You are not allowed to rename the input parameter
    - You are not allowed to use any other variables
    - You are not allowed to use any other functions
    - You are not allowed to use any other keywords

  Kata Link:
    https://www.codewars.com/kata/586ed14c35396d912100049a

  Discuss Link:
    https://www.codewars.com/kata/586ed14c35396d912100049a/discuss

  Solutions Link:
    https://www.codewars.com/kata/586ed14c35396d912100049a/solutions
*/

// Long Solution
const swap = (ary) => ([ary[0], ary[1]] = [ary[1], ary[0]]);

// Function Export
module.exports = swap;
