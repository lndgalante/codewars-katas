/*
  Title:
    Array Leaders (Array Series #3)

  Description:
    Introduction and Warm-up (Highly recommended)
    Playing With Lists/Arrays Series

    Definition
    An element is leader if it is greater than The Sum all the elements to its right side.

    Task
    Given an array/list [] of integers , Find all the LEADERS in the array.

  Examples:
    1 - arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

    Explanation:
      4  is greater than the sum all the elements to its right side
    Note:
      The last element 0  is equal to right sum of its elements (abstract zero).

    2- arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

    Explanation:
      17  is greater than the sum all the elements to its right side
      5  is greater than the sum all the elements to its right side
    Note:
      The last element  2  is  greater than the sum of its right elements (abstract zero).

    3- arrayLeaders ({5, 2, -1}) ==> return {5, 2}

    Explanation:
      5  is greater than the sum all the elements to its right side
      2  is greater than the sum all the elements to its right side
    Note:
      The last element  -1  is less than the sum of its right elements (abstract zero).

    4- arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

    Explanation:
      0  is greater than the sum all the elements to its right side
      -1  is greater than the sum all the elements to its right side
      3  is greater than the sum all the elements to its right side
    Note:
      The last element  2  is  greater than the sum of its right elements (abstract zero).

  Notes:
    - Array/list size is at least 3 .

    - Array/list's numbers  Will be mixture of positives , negatives and  zeros

    - Repeatition of numbers in the array/list could occur.

    - Returned Array/list should store the leading numbers in the same order in the original array/list .

  Kata Link:
    https://www.codewars.com/kata/array-leaders-array-series-number-3

  Discuss Link:
    https://www.codewars.com/kata/array-leaders-array-series-number-3/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-leaders-array-series-number-3/solutions
*/

// Long Solution
const arrayLeaders = numbers =>
  numbers.filter((number, index) => {
    const totalRight = numbers.slice(index + 1).reduce((total, number) => total + number, 0)
    return number > totalRight
  })

// Function Export
module.exports = arrayLeaders
