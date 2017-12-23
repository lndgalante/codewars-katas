/*
  Title:
    Calculating with Functions

  Description:
    This time we want to write calculations using functions and get the results.

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations:
    plus, minus, times, dividedBy (divided_by in Ruby)

    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand,
    the most inner function represents the right operand

  Examples:
    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3

  Kata Link:
    https://www.codewars.com/kata/calculating-with-functions

  Discuss Link:
    https://www.codewars.com/kata/calculating-with-functions/discuss

  Solutions Link:
    https://www.codewars.com/kata/calculating-with-functions/solutions
*/

// Long Solution
/*
  const zero = operation => (operation ? eval(`0 ${operation}`) : 0)
  const one = operation => (operation ? eval(`1 ${operation}`) : 1)
  const two = operation => (operation ? eval(`2 ${operation}`) : 2)
  const three = operation => (operation ? eval(`3 ${operation}`) : 3)
  const four = operation => (operation ? eval(`4 ${operation}`) : 4)
  const five = operation => (operation ? eval(`5 ${operation}`) : 5)
  const six = operation => (operation ? eval(`6 ${operation}`) : 6)
  const seven = operation => (operation ? eval(`7 ${operation}`) : 7)
  const eight = operation => (operation ? eval(`8 ${operation}`) : 8)
  const nine = operation => (operation ? eval(`9 ${operation}`) : 9)

  const plus = num => (num ? `+ ${num}` : '+')
  const minus = num => (num ? `- ${num}` : '-')
  const times = num => (num ? `* ${num}` : '*')
  const dividedBy = num => (num ? `/ ${num}` : '/')
*/

// Short Solution
const expression = (number, operation) =>
  operation ? operation(number) : number

const zero = operation => expression(0, operation)
const one = operation => expression(1, operation)
const two = operation => expression(2, operation)
const three = operation => expression(3, operation)
const four = operation => expression(4, operation)
const five = operation => expression(5, operation)
const six = operation => expression(6, operation)
const seven = operation => expression(7, operation)
const eight = operation => expression(8, operation)
const nine = operation => expression(9, operation)

const plus = x => y => y + x
const minus = x => y => y - x
const times = x => y => y * x
const dividedBy = x => y => y / x

// Function Export
module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
}
