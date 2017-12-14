/* 
  Title:
    Basic Mathematical Operations

  Description:
    Your task is to create a function - basic_op().

    The function should take three arguments - 
    operation(string/char), value1(number), value2(number). 
    The function should return result of numbers after applying the chosen operation.

  Examples:
    basicOp('+', 4, 7)         // Output: 11
    basicOp('-', 15, 18)       // Output: -3
    basicOp('*', 5, 5)         // Output: 25
    basicOp('/', 49, 7)        // Output: 7

  Link:
    https://www.codewars.com/kata/basic-mathematical-operations
*/

// Long Solution
/* 
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
  }
} 
*/

// Short Solution
const basicOp = (operation, value1, value2) =>
  eval(`${value1} ${operation} ${value2}`)

// Function Export
module.exports = basicOp
