/*
  Title:
    Working with arrays I (and why your code fails in some katas)

  Description:
    In this kata the function returns an array/list of numbers without its last element.
    The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

  Notes:
    Hint: watch out for side effects.
    Some good reading: MDN Docs about arrays

  Kata Link:
    https://www.codewars.com/kata/working-with-arrays-i-and-why-your-code-fails-in-some-katas

  Discuss Link:
    https://www.codewars.com/kata/working-with-arrays-i-and-why-your-code-fails-in-some-katas/discuss

  Solutions Link:
    https://www.codewars.com/kata/working-with-arrays-i-and-why-your-code-fails-in-some-katas/solutions
*/

// Long Solution
const withoutLast = arr => arr.slice(0, -1)

// Function Export
module.exports = withoutLast
