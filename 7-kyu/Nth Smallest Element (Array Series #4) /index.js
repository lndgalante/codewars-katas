/*
  Title:
    Nth Smallest Element (Array Series #4)

  Description:
    Given an array/list [] of integers ,
    Find the Nth smallest element in this array of integers

  Examples:
    Input >> Output Examples

    1- nthSmallest({3,1,2} ,2) ==> return (2)

    Explanation:

    Since the passed number is 2 , Then the second smallest element in this array/list is 2

    2- nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)

    Explanation:

    Since the passed number is 3 , Then the third smallest element in this array/list is 7

    3- nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2)

    Explanation:

    Since the passed number is 4 , Then the fourth smallest element in this array/list is 2

    4- nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

    Explanation:

    Since the passed number is 5 , Then the fifth smallest element in this array/list is 92

  Notes:
    - Array/list size is at least 3
    - Array/list's numbers could be a mixture of positives , negatives and zeros
    - Repeatition in array/list's numbers could occur , so don't Remove Duplications

  Kata Link:
    https://www.codewars.com/kata/nth-smallest-element-array-series-number-4

  Discuss Link:
    https://www.codewars.com/kata/nth-smallest-element-array-series-number-4/discuss

  Solutions Link:
    https://www.codewars.com/kata/nth-smallest-element-array-series-number-4/solutions
*/

// Long Solution
const nthSmallest = (arr, pos) => [...arr].sort((a, b) => a - b)[pos - 1]

// Function Export
module.exports = nthSmallest
