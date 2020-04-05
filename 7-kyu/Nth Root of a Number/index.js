/*
  Title:
    Nth Root of a Number

  Description:
    Given two numbers x and n, calculate the (positive) nth root of x.
    This means that being r = result, r^n = x;

  Examples:
    root(4, 2);   // 2 (the square root of 4 is 2 , 2^2 = 4);
    root(8, 3);   // 2 (the cube root of 8 is 2   , 2^3 = 8);
    root(256, 4); // 4 (the 4th root of 256 is 4  , 4^4 = 256);
    root(9, 2);   // 3 (the square root of 9 is 3 , 3^2 = 9);

  Kata Link:
    https://www.codewars.com/kata/5520714decb43308ea000083

  Discuss Link:
    https://www.codewars.com/kata/5520714decb43308ea000083/discuss

  Solutions Link:
    https://www.codewars.com/kata/5520714decb43308ea000083/solutions
*/

// Long Solution
const root = (x, n) => x ** (1 / n)

// Function Export
module.exports = root
