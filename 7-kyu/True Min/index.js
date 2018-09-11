/*
  Title:
    True Min

  Description:
    The Math.min function has stopped working, so we have to use our own function.
    We are off to a good start, but this function doesn't seem to handle everything properly.
    Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

  Examples:
    function min(a, b) {
      return a < b ? a : b
    }

  Notes:
    This min function need not handle more than two arguments.


  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
const min = (a, b) => {
  const firstNumber = a === null ? 0 : a
  const secondNumber = b === null ? 0 : b

  if (isNaN(firstNumber) || isNaN(secondNumber)) return NaN

  return firstNumber < secondNumber ? firstNumber : secondNumber
}

// Function Export
module.exports = min
