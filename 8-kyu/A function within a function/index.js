/*
  Title:
    A function within a function

  Description:
    Given an input n, write a function always that returns a function which returns n.
    Ruby should return a lambda or a proc.

  Examples:
    var three = always(3);
    three(); // returns 3

  Kata Link:
    https://www.codewars.com/kata/a-function-within-a-function

  Discuss Link:
    https://www.codewars.com/kata/a-function-within-a-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/a-function-within-a-function/solutions
*/

// Long Solution
/*
function always(n) {
  return function() {
    return n
  }
}
*/

// Short Solution
const always = n => () => n

// Function Export
module.exports = always
