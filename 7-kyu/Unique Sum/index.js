/*
  Title:
    Unique Sum

  Description:
    Given a list of integers values, your job is to return the sum of the values;
    however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

  Examples:
    [ 1, 2, 3] ==> 6

    [ 1, 3, 8, 1, 8] ==> 12

    [ -1, -1, 5, 2, -7] ==> -1

    [] ==> null

  Kata Link:
    https://www.codewars.com/kata/unique-sum

  Discuss Link:
    https://www.codewars.com/kata/unique-sum/discuss

  Solutions Link:
    https://www.codewars.com/kata/unique-sum/solutions
*/

// Long Solution
const uniqueSum = lst => [...new Set(lst)].reduce((total, value) => total + value, null)

// Function Export
module.exports = uniqueSum
