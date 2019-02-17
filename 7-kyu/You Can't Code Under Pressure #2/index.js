/*
  Title:
    You Can't Code Under Pressure #2

  Description:
    Code as fast as you can!
    You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.


  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/you-cant-code-under-pressure-number-2

  Discuss Link:
    https://www.codewars.com/kata/you-cant-code-under-pressure-number-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/you-cant-code-under-pressure-number-2/solutions
*/

// Long Solution
class Counter {
  constructor() {
    this.counter = 0
  }

  check() {
    return this.counter
  }

  increment() {
    this.counter++
  }
}

// Function Export
module.exports = Counter
