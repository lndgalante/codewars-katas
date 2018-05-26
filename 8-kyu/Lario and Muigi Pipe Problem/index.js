/* eslint unicorn/prefer-spread: 0 */

/*
  Title:
    Lario and Muigi Pipe Problem

  Description:
    #Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

    The pipes connecting your level's stages together need to be fixed before you recieve any more complaints.
    Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

    #Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

  Examples:
    Input: 1,3,5,6,7,8

    Output: 1,2,3,4,5,6,7,8

  Kata Link:
    https://www.codewars.com/kata/lario-and-muigi-pipe-problem

  Discuss Link:
    https://www.codewars.com/kata/lario-and-muigi-pipe-problem/discuss

  Solutions Link:
    https://www.codewars.com/kata/lario-and-muigi-pipe-problem/solutions
*/

// Long Solution
const pipeFix = numbers =>
  Array.from(
    { length: numbers[numbers.length - 1] - numbers[0] + 1 },
    (_, i) => numbers[0] + i
  )

// Function Export
module.exports = pipeFix
