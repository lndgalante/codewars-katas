/*
  Title:
    Basic variable assignment

  Description:
    This code should store "codewa.rs" as a variable called "name" but it's not working.
    Can you figure out why?

  Kata Link:
    https://www.codewars.com/kata/basic-variable-assignment

  Discuss Link:
    https://www.codewars.com/kata/basic-variable-assignment/discuss

  Solutions Link:
    https://www.codewars.com/kata/basic-variable-assignment/solutions
*/

// Long Solution
const [a, b] = ['code', 'wa.rs']
const name = a + b

// Function Export
module.exports = name
