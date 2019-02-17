/*
  Title:
    Super Duper Easy

  Description:
    Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

  Notes:
    In C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.

  Kata Link:
    https://www.codewars.com/kata/super-duper-easy

  Discuss Link:
    https://www.codewars.com/kata/super-duper-easy/discuss

  Solutions Link:
    https://www.codewars.com/kata/super-duper-easy/solutions
*/

// Long Solution
const problem = x => (typeof x === 'number' ? x * 50 + 6 : 'Error')

// Function Export
module.exports = problem
