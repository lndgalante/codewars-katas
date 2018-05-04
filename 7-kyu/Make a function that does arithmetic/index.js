/*
  Title:
    Make a function that does arithmetic!

  Description:
    Given two numbers and an arithmetic operator (the name of it, as a string),
    return the result of the two numbers having that operator used on them.

    a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

    The four operators are "add", "subtract", "divide", "multiply".

  Examples:
    arithmetic(5, 2, "add")      => returns 7
    arithmetic(5, 2, "subtract") => returns 3
    arithmetic(5, 2, "multiply") => returns 10
    arithmetic(5, 2, "divide")   => returns 2.5
    ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
    ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
    ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
    ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2

  Notes:
    Try to do it without using if statements!

  Kata Link:
    https://www.codewars.com/kata/make-a-function-that-does-arithmetic

  Discuss Link:
    https://www.codewars.com/kata/make-a-function-that-does-arithmetic/discuss

  Solutions Link:
    https://www.codewars.com/kata/make-a-function-that-does-arithmetic/solutions
*/

// Long Solution
/*
function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b

    case 'subtract':
      return a - b

    case 'multiply':
      return a * b

    case 'divide':
      return a / b

    default:
      return 'Unknown operation'
  }
}
*/

// Short Solution
const arithmetic = (a, b, operator) =>
  ({
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }[operator])

// Function Export
module.exports = arithmetic
