/* 
  Title:
    Sum of two lowest positive integers

  Description:
    Create a function that returns the sum of the two lowest positive numbers
     given an array of minimum 4 integers. No floats or empty arrays will be passed.

  Examples:
    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    [10, 343445353, 3453445, 3453545353453] should return 3453455.

  Notes:
    Do not modify the original array.
  
  Link:
    https://www.codewars.com/kata/sum-of-two-lowest-positive-integers
*/

// Long Solution
function sumTwoSmallestNumbers(numbers) {
  const numbersSorted = [...numbers].sort((a, b) => a - b)
  return numbersSorted[0] + numbersSorted[1]
}

// Function Export
module.exports = sumTwoSmallestNumbers
