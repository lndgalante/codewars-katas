/*
  Title:
    Operator Precedence (for beginners)

  Description:
    Test your fundamental knowledge of arithmetic operator to operand precedence with the following scenario.

    Maria knows the formula for calculating degrees Celsius given a temperature in degrees Fahrenheit is: subtract 32, then divide the number by 9/5; but she cannot find her calculator, so she decides to write a function to calculate it but it gives the wrong answer.

    Can you help her?

    You don't have to handle non-numerical inputs, all inputs will be numerical.

  Examples:
    Convert 50 degrees Fahrenheit to degrees Celsius:

    50°F = 10 °C.

  Kata Link:
    https://www.codewars.com/kata/operator-precedence-for-beginners

  Discuss Link:
    https://www.codewars.com/kata/operator-precedence-for-beginners/discuss

  Solutions Link:
    https://www.codewars.com/kata/operator-precedence-for-beginners/solutions
*/

// Long Solution
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / (9 / 5)

// Function Export
module.exports = fahrenheitToCelsius
