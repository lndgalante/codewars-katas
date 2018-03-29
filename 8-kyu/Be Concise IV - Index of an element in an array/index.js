/*
  Title:
    Be Concise IV - Index of an element in an array

  Description:
    Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise.
    Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata.
    You may assume that all array elements are unique.

  Kata Link:
    https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array/solutions
*/

// Long Solution
const find = (array, element) =>
  array.includes(element) ? array.indexOf(element) : 'Not found'

// Function Export
module.exports = find
