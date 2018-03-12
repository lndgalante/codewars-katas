/* eslint no-eval: 0 */

/*
  Title:
    simple calculator

  Description:
    You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

    Your function will accept three arguments:
    The first and second argument will be numbers.
    The third argument will represent a sign indicating the operation to perform on these two numbers.

  Examples:
    calculator(1,2,"+"); //=> result will be 3
      // if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
    calculator(1,2,"&"); //=> result will be "unknown value"
    calculator(1,"k","*"); //=> result will be "unknown value"

  Kata Link:
    https://www.codewars.com/kata/simple-calculator

  Discuss Link:
    https://www.codewars.com/kata/simple-calculator/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-calculator/solutions
*/

// Long Solution
/*
const calculator = (a, b, sign) => {
  if (typeof a === 'number' && typeof b === 'number') return 'unknown value'

  switch (sign) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    default:
      return 'unknown value'
  }
}
*/

// Short Solution
const calculator = (a, b, sign) => {
  try {
    return eval(`${a} ${sign} ${b}`)
  } catch (err) {
    return 'unknown value'
  }
}

// Function Export
module.exports = calculator
