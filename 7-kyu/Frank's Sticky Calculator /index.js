/*
  Title:
    Frank's Sticky Calculator

  Description:
    Frank's Sticky Calculator

    Description

    Frank just bought a new calculator.
    But, this is no normal calculator.
    This is a 'Sticky Calculator.
    Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:
    For instance:
    50 + 12 becomes 5012

    and then the operation is carried out as usual:
    (5012) + 12 = 5024

    Task

    It is your job to create a function which takes 3 parameters:
    stickyCalc(operation, val1, val2)

    which works just like Frank's sticky calculator
  Examples:
    stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
    stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
    stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
    stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101

    stickyCalc('/', 12.1, 6.8), 18);

    12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.
    Although 127 / 7 = 18.1428 ; 18 is outputted instead.


  Notes:
    - The calculator only works for positive integers only.
    - The calculator rounds any non-integer before operating.
    - The calculator rounds any output to nearest integer.

  Kata Link:
    https://www.codewars.com/kata/5900750cb7c6172207000054

  Discuss Link:
    https://www.codewars.com/kata/5900750cb7c6172207000054/discuss

  Solutions Link:
    https://www.codewars.com/kata/5900750cb7c6172207000054/solutions
*/

// Long Solution
const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}

function stickyCalc(operation, firstValue, secondValue) {
  const [roundedFirstValue, roundedSecondValue] = [Math.round(firstValue), Math.round(secondValue)]
  const initialValue = Number(`${roundedFirstValue}${roundedSecondValue}`)

  const operationFunction = OPERATIONS[operation]
  const result = operationFunction(initialValue, roundedSecondValue)

  return Math.round(result)
}

// Function Export
module.exports = stickyCalc
