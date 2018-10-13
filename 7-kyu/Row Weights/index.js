/*
  Title:
    Row Weights

  Description:
    Scenario
      Several people are standing in a row divided into two teams.
      The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

    Task
      Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

  Examples:
    Input >> Output Examples

    1- rowWeights([13, 27, 49])  ==>  return (62, 27)

    Explanation:

    The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

    2- rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

    Explanation:

    The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

    3- rowWeights([80])  ==>  return (80, 0)

    Explanation:

    The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

  Notes:
      - Array size is at least 1.
      - All numbers will be positive.

  Kata Link:
    https://www.codewars.com/kata/row-weights

  Discuss Link:
    https://www.codewars.com/kata/row-weights/discuss

  Solutions Link:
    https://www.codewars.com/kata/row-weights/solutions
*/

// Long Solution
const rowWeights = array =>
  array.reduce(
    (weights, value, index) => {
      weights[index % 2] += value
      return weights
    },
    [0, 0]
  )

// Function Export
module.exports = rowWeights
