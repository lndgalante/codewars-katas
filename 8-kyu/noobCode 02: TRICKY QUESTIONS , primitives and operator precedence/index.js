/*
  Title:
    noobCode 02: TRICKY QUESTIONS , primitives and operator precedence

  Description:
    1 < 2 < 3 === true, right? but can

    3 < 2 < 1 === true, too??

    Here's your task: write a function greaterThanLessThan with three arguments (a,b,c) that returns a boolean (true or false), such that

    a = 1
    b = 2
    c = 3
    returns true, as does

    a = 3
    b = 2
    c = 1

    Note: arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.

    Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.

    Hint: This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.

  Kata Link:
    https://www.codewars.com/kata/noobcode-02-tricky-questions-primitives-and-operator-precedence

  Discuss Link:
    https://www.codewars.com/kata/noobcode-02-tricky-questions-primitives-and-operator-precedence/discuss

  Solutions Link:
    https://www.codewars.com/kata/noobcode-02-tricky-questions-primitives-and-operator-precedence/solutions
*/

// Long Solution
const greaterThanLessThan = (a, b, c) => a < b < c

// Function Export
module.exports = greaterThanLessThan
