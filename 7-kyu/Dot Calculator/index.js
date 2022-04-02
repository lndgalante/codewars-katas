/*
  Title:
    Dot Calculator

  Description:
    You have to write a calculator that receives strings for input.
    The dots will represent the number in the equation.
    There will be dots on one side, an operator, and dots again after the operator.
    The dots and the operator will be separated by one space.
    Here are the following valid operators :

    + Addition
    - Subtraction
    * Multiplication
    // Integer Division

    Your Work (Task)
    You'll have to return a string that contains dots, as many the equation returns.
    If the result is 0, return the empty string.
    When it comes to subtraction, the first number will always be greater than or equal to the second number.

  Examples:
    * "..... + ..............." => "...................."
    * "..... - ..."             => ".."
    * "..... - ."               => "...."
    * "..... * ..."             => "..............."
    * "..... * .."              => ".........."
    * "..... // .."             => ".."
    * "..... // ."              => "....."
    * ". // .."                 => ""
    * ".. - .."                 => ""

  Kata Link:
    https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

  Discuss Link:
    https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/discuss

  Solutions Link:
    https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/solutions
*/

// Long Solution
const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '//': (a, b) => a / b,
}

function dotCalculator(equation) {
  const [firstDots, dotOperation, secondDots] = equation.split(' ')

  const operation = OPERATIONS[dotOperation]
  const dotOperationResult = operation(firstDots.length, secondDots.length)

  return '.'.repeat(dotOperationResult)
}

// Short Solution
/*
const dotCalculator  = () => {}
*/

// Function Export
module.exports = dotCalculator
