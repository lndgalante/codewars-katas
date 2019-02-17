/*
  Title:
    Expressions Matter

  Description:
    Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().

    Consider an Example :
    With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

    1 * (2 + 3) = 5
    1 * 2 * 3 = 6
    1 + 2 * 3 = 7
    (1 + 2) * 3 = 9

    So the maximum value that you can obtain is  9.

  Examples:
    1- expressionsMatter(1,2,3)  ==>  return 9

    Explanation:
    After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

    2- expressionsMatter(1,1,1)  ==>  return 3

    Explanation:
    After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

    3- expressionsMatter(9,1,1)  ==>  return 18

    Explanation:
    After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.

  Kata Link:
    https://www.codewars.com/kata/expressions-matter

  Discuss Link:
    https://www.codewars.com/kata/expressions-matter/discuss

  Solutions Link:
    https://www.codewars.com/kata/expressions-matter/solutions
*/

// Long Solution
/*
const expressionMatter = (a, b, c) => Math.max(...[a * (b + c), a * b * c, a + b + c, (a + b) * c])
*/

// Short Solution
const expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))

// Function Export
module.exports = expressionMatter
