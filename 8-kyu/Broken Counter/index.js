/*
  Title:
    Broken Counter

  Description:
    Our counter prototype is broken. Can you spot, what's wrong here?

  Kata Link:
    https://www.codewars.com/kata/broken-counter

  Discuss Link:
    https://www.codewars.com/kata/broken-counter/discuss

  Solutions Link:
    https://www.codewars.com/kata/broken-counter/solutions
*/

// Long Solution
/*
function Counter() {
  this.value = 0
}

Counter.prototype.increase = function() {
  this.value++
}

Counter.prototype.getValue = function() {
  return this.value
}

Counter.prototype.reset = function() {
  this.value = 0
}
*/

// Short Solution
class Counter {
  constructor() {
    this.value = 0
  }

  increase() {
    this.value++
  }

  getValue() {
    return this.value
  }

  reset() {
    this.value = 0
  }
}

// Function Export
module.exports = Counter
