/*
  Title:
    Test Your Knowledge Of Function Scope

  Description:
    Write a function that adds from two invocations.

  Examples:
    add(3)(4)  // 7
    add(12)(20) // 32

  Kata Link:
    https://www.codewars.com/kata/test-your-knowledge-of-function-scope

  Discuss Link:
    https://www.codewars.com/kata/test-your-knowledge-of-function-scope/discuss

  Solutions Link:
    https://www.codewars.com/kata/test-your-knowledge-of-function-scope/solutions
*/

// Long Solution
const add = numA => numB => numA + numB

// Function Export
module.exports = add
