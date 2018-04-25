/*
  Title:
    Functional Addition

  Description:
    Create a function add(n)/Add(n) which returns a function that always adds n to any number
    Note for Java: the return type and methods have not been provided to make it a bit more challenging.

  Examples:
    var addOne = add(1);
    addOne(3); // 4

    var addThree = add(3);
    addThree(3); // 6

  Kata Link:
    https://www.codewars.com/kata/functional-addition

  Discuss Link:
    https://www.codewars.com/kata/functional-addition/discuss

  Solutions Link:
    https://www.codewars.com/kata/functional-addition/solutions
*/

// Long Solution
const add = n => m => n + m

// Function Export
module.exports = add
