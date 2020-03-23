/*
  Title:
    Sum of Minimums!

  Description:
    Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

  Examples:
    [
      [1, 2, 3, 4, 5],       // minimum value of row is 1
      [5, 6, 7, 8, 9],       // minimum value of row is 5
      [20, 21, 34, 56, 100]  // minimum value of row is 20
    ]
    So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

  Notes:
    You will be always given non-empty array containing Positive values.

  Kata Link:
    https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

  Discuss Link:
    https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/discuss

  Solutions Link:
    https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/solutions
*/

// Long Solution
const sumOfMinimums = (array) => array.reduce((total, subarray) => total + Math.min(...subarray), 0)

// Function Export
module.exports = sumOfMinimums
