/*
  Title:
    Reimplement Multiplication Part 1

  Description:
    Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.
    You should only use the + and/or - operators. Using * is cheating!
    You can do this iteratively or recursively.

  Kata Link:
    https://www.codewars.com/kata/reimplement-multiplication-part-1

  Discuss Link:
    https://www.codewars.com/kata/reimplement-multiplication-part-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/reimplement-multiplication-part-1/solutions
*/

// Long Solution
const mul = (a, b) => Array.from({ length: b }).reduce(total => total + a, 0)

// Function Export
module.exports = mul
