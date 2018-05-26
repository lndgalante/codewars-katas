/*
  Title:
    Unpacking Arguments

  Description:
    You must create a function, spread, that takes a function and a list of arguments to be applied to that function.
    You must make this function return the result of calling the given function/lambda with the given arguments.

  Examples:
    spread(someFunction, [1, true, "Foo", "bar"] )
    // is the same as...
    someFunction(1, true, "Foo", "bar")

  Kata Link:
    https://www.codewars.com/kata/unpacking-arguments

  Discuss Link:
    https://www.codewars.com/kata/unpacking-arguments/discuss

  Solutions Link:
    https://www.codewars.com/kata/unpacking-arguments/solutions
*/

// Long Solution
/*
const spread = (func, args) => func.apply(null, args)
*/

// Short Solution
const spread = (func, args) => func(...args)

// Function Export
module.exports = spread
