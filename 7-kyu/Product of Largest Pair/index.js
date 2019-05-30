/*
  Title:
    Product of Largest Pair

  Description:
    Rick wants a faster way to get the product of the largest pair in an array.
    Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
    All inputs will be valid.

    Examples:
    Passing [2, 6, 3] should return 18, the product of [6, 3].

    maxProduct([2, 1, 5, 0, 4, 3])              // 20
    maxProduct([7, 8, 9])                       // 72
    maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

  Notes:
    Mr. Roll will only accept solutions that are faster than his, which has a running time O(nlogn).

  Kata Link:
    https://www.codewars.com/kata/product-of-largest-pair

  Discuss Link:
    https://www.codewars.com/kata/product-of-largest-pair/discuss

  Solutions Link:
    https://www.codewars.com/kata/product-of-largest-pair/solutions
*/

// Long Solution ( Slow doesn't work - ~1500ms )
/*
 const maxProduct = a => {
  const [firstBiggest, secondBiggest] = [...a].sort((a, b) => b - a)
  return firstBiggest * secondBiggest
}
*/

// Long Solution ( Slow doesn't work - 1000ms )
/*
const maxProduct = a => {
  const firstBiggest = Math.max(...a)

  const arrayWithoutFirstBiggest = [...a].filter(num => num !== firstBiggest)
  const secondBiggest = Math.max(...arrayWithoutFirstBiggest)

  return firstBiggest * secondBiggest
}
*/

// Long Solution ( Fast enough! )
/*
const maxProduct = a => {
  const firstBiggest = Math.max(...a)
  const firstBiggestIndex = a.indexOf(firstBiggest)

  a.splice(firstBiggestIndex, 1)
  const secondBiggest = Math.max(...a)

  return firstBiggest * secondBiggest
}
*/

// Short Solution
const maxProduct = a => a.splice(a.indexOf(Math.max(...a)), 1)[0] * Math.max(...a)

// Function Export
module.exports = maxProduct
