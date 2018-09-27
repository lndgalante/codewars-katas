/*
  Title:
    Number-like counter

  Description:
    You're going to implement a simple counter class.
    The counter will start at zero, and every time its incr method is called, it will increase by 1.

    There's one caveat: Your counter must act like a number and support arithmetic operations and comparisons.

  Examples:
    var c = new Counter();
    c.incr(); // counter is now at 1
    c + 1; // 2
    c > 1; // false
    c > 0; // true
    c == 1; // true
    Math.sqrt(c); // 1

  Notes:
    You are not required to support equality comparison between two Counter instances.

  Kata Link:
    https://www.codewars.com/kata/number-like-counter

  Discuss Link:
    https://www.codewars.com/kata/number-like-counter/discuss

  Solutions Link:
    https://www.codewars.com/kata/number-like-counter/solutions
*/

// Long Solution
class Counter {
  constructor() {
    this.number = 0
  }

  incr() {
    this.number++
  }

  valueOf() {
    return this.number
  }
}

// Function Export
module.exports = Counter
