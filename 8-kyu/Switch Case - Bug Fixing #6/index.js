/* eslint no-eval: 0 */

/*
  Title:
    Switch/Case - Bug Fixing #6

  Description:
    Oh no! Timmy's evalObject function doesn't work.
    He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

  Kata Link:
    https://www.codewars.com/kata/switch-slash-case-bug-fixing-number-6

  Discuss Link:
    https://www.codewars.com/kata/switch-slash-case-bug-fixing-number-6/discuss

  Solutions Link:
    https://www.codewars.com/kata/switch-slash-case-bug-fixing-number-6/solutions
*/

// Long Solution
/*
const evalObject = ({ operation, a, b }) => {
  switch (operation) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '/':
      return a / b
    case '*':
      return a * b
    case '%':
      return a % b
    case '^':
      return a ** b
  }
}
*/

// Short Solution
const evalObject = ({ operation, a, b }) =>
  eval(operation === '^' ? `Math.pow(${a}, ${b})` : `${a} ${operation} ${b}`)

// Function Export
module.exports = evalObject
