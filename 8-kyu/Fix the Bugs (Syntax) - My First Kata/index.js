/*
  Title:
    Fix the Bugs (Syntax) - My First Kata

  Description:
    Hello, this is my first Kata so forgive me if it is of poor quality.

    In this Kata you should fix/create a program that returns the following values:

    false/False if either a or b (or both) are not numbers
    a % b plus b % a if both arguments are numbers
    You may assume the following:

    If a and b are both numbers, neither of a or b will be 0.
    Language-Specific Instructions
    Javascript and PHP
    In this Kata you should try to fix all the syntax errors found in the code.

    Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

    Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.

  Kata Link:
    https://www.codewars.com/kata/fix-the-bugs-syntax-my-first-kata

  Discuss Link:
    https://www.codewars.com/kata/fix-the-bugs-syntax-my-first-kata/discuss

  Solutions Link:
    https://www.codewars.com/kata/fix-the-bugs-syntax-my-first-kata/solutions
*/

// Long Solution
const myFirstKata = (a, b) =>
  typeof a !== 'number' || typeof b !== 'number' ? false : a % b + b % a

// Function Export
module.exports = myFirstKata
