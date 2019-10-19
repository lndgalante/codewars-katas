/*
  Title:
    Is this working?

  Description:
    Rewriting selfies
    Let's get rid of the `self` usage, by using arrow functions!

    This can be achieved without arrow functions as well, but the point would be to learn the differences.

  Notes:
    Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  Kata Link:
    https://www.codewars.com/kata/is-this-working

  Discuss Link:
    https://www.codewars.com/kata/is-this-working/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-this-working/solutions
*/

// Long Solution
function Counter() {
  this.count = 0
  this.updateCount = () => this.count++
}

// Class Solution
/*
class Counter {
  constructor() {
    this.count = 0
  }

  updateCount() {
    this.count++
  }
}
*/

// Function Export
module.exports = Counter
