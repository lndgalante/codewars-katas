/*
  Title:
    99 Problems, #1: last in list

  Description:
    Write a function last that accepts a list and returns the last element in the list.

    If the list is empty:
    In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option
    In languages that do not have an empty option, just return null

  Kata Link:
    https://www.codewars.com/kata/57d86d3d3c3f961278000005

  Discuss Link:
    https://www.codewars.com/kata/57d86d3d3c3f961278000005/discuss

  Solutions Link:
    https://www.codewars.com/kata/57d86d3d3c3f961278000005/solutions
*/

// Long Solution
/*
const last = (xs) => {
  const lastElement = xs[xs.length - 1]
  return typeof lastElement !== 'undefined' ? lastElement : null
}
*/

// Short Solution
const last = (xs) => (xs.length === 0 ? null : xs[xs.length - 1])

// Function Export
module.exports = last
