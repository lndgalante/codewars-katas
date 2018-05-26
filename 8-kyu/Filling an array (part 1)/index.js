/*
  Title:
    Filling an array (part 1)

  Description:
    We want an array, but not just any old array, an array with contents!

    Write a function that produces an array with the numbers 0 to N-1 in it.

    For example, the following code will result in an array containing the numbers 0 to 4:

    arr(5) // => [0,1,2,3,4]

  Kata Link:
    https://www.codewars.com/kata/filling-an-array-part-1

  Discuss Link:
    https://www.codewars.com/kata/filling-an-array-part-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/filling-an-array-part-1/solutions
*/

// Long Solution
/*
const arr = N => (N ? Array.from(Array(N), (_, index) => index) : [])
*/

// Short Solution
const arr = n => (n ? [...new Array(n).keys()] : [])

// Function Export
module.exports = arr
