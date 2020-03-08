/*
  Title:
    Product of Array Items

  Description:
    Calculate the product of all elements in an array.

    If the array is null or is empty, the function should return null.

  Kata Link:
    https://www.codewars.com/kata/product-of-array-items

  Discuss Link:
    https://www.codewars.com/kata/product-of-array-items/discuss

  Solutions Link:
    https://www.codewars.com/kata/product-of-array-items/solutions
*/

// Long Solution
const product = values =>
  Array.isArray(values) && values.length > 0
    ? values.reduce((total, value) => total * value, 1)
    : null

// Function Export
module.exports = product
