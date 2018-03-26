/*
  Title:
    Pick a set of first elements

  Description:
    Write a JavaScript function to get the first element of an array.
    Passing a parameter n (default=1) will return the first n elements of the array.
    If n == 0 return an empty array ([]);

  Examples:
    var arr = ['a', 'b', 'c', 'd', 'e'];
    first(arr) => ['a'];
    first(arr, 2) => ['a', 'b']
    first(arr, 3) => ['a', 'b', 'c'];
    first(arr, 0) => [];

  Notes:
    Don't modify array argument.

  Kata Link:
    https://www.codewars.com/kata/pick-a-set-of-first-elements

  Discuss Link:
    https://www.codewars.com/kata/pick-a-set-of-first-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/pick-a-set-of-first-elements/solutions
*/

// Long Solution
const first = (arr, n = 1) => arr.slice(0, n)

// Function Export
module.exports = first
