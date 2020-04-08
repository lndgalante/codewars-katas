/* eslint no-eval: 0 */

/*
  Title:
    Basic Calculator

  Description:
    Write a function called calculate that takes 3 values.
    The first and third values are numbers.
    The second value is a character. If the character is "+" , "-", "*", or "/",
    the function will return the result of the corresponding mathematical function on the two numbers.
    If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

  Examples:
      calculate(2,"+", 4); //Should return 6
      calculate(6,"-", 1.5); //Should return 4.5
      calculate(-4,"*", 8); //Should return -32
      calculate(49,"/", -7); //Should return -7
      calculate(8,"m", 2); //Should return null
      calculate(4,"/",0) //should return null

  Notes:
    Keep in mind, you cannot divide by zero.
    If an attempt to divide by zero is made, return null (throw an ArgumentException in C#).

  Kata Link:
    https://www.codewars.com/kata/basic-calculator

  Discuss Link:
    https://www.codewars.com/kata/basic-calculator/discuss

  Solutions Link:
    https://www.codewars.com/kata/basic-calculator/solutions
*/

// Long Solution
/*
const calculate = (num1, operation, num2) => {
  const operations = ['+', '-', '*', '/']
  if (!operations.includes(operation)) return null

  if (operation === '+') return num1 + num2
  if (operation === '-') return num1 - num2
  if (operation === '*') return num1 * num2
  if (operation === '/') return num2 === 0 ? null : num1 / num2
}
*/

// Short Solution
const calculate = (number1, operation, number2) => {
  const operations = new Set(['+', '-', '*', '/'])

  if (!operations.has(operation)) return null
  if (operation === '/' && number2 === 0) return null

  return eval(`${number1}${operation}${number2}`)
}

// Function Export
module.exports = calculate
