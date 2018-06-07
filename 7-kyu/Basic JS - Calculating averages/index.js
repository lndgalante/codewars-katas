/*
  Title:
    Basic JS - Calculating averages

  Description:
    Let's build a calculator that can calculate the average for an arbitrary number of arguments.

    The test expects you to provide a Calculator object with an average method:

    Calculator.average()
    The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

    It expects Calculator.average(3,4,5) to return 4.

  Kata Link:
    https://www.codewars.com/kata/basic-js-calculating-averages

  Discuss Link:
    https://www.codewars.com/kata/basic-js-calculating-averages/discuss

  Solutions Link:
    https://www.codewars.com/kata/basic-js-calculating-averages/solutions
*/

// Long Solution
let Calculator = {
  average: function() {
    const numbers = [...arguments]
    const totalNumbers = numbers.length

    if (!totalNumbers) return 0

    return numbers.reduce((total, value) => total + value, 0) / totalNumbers
  },
}

// Function Export
module.exports = Calculator
