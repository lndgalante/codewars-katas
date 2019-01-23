/*
  Title:
    By 3, or not by 3? That is the question . . .

  Description:
    A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three.
    If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
    Given a series of numbers as a string, determine if the number represented by the string is divisible by three.
    You can expect all test case arguments to be strings representing values greater than 0.

  Examples:
    divisibleByThree('123') // true
    divisibleByThree('8409') // true
    divisibleByThree('100853') // false
    divisibleByThree('33333333') // true
    divisibleByThree('7') // false

  Kata Link:
    https://www.codewars.com/kata/by-3-or-not-by-3-that-is-the-question

  Discuss Link:
    https://www.codewars.com/kata/by-3-or-not-by-3-that-is-the-question/discuss

  Solutions Link:
    https://www.codewars.com/kata/by-3-or-not-by-3-that-is-the-question/solutions
*/

// Long Solution
const divisibleByThree = str => [...str].reduce((total, num) => total + Number(num), 0) % 3 === 0

// Function Export
module.exports = divisibleByThree
