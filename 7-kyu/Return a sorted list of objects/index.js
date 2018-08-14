/*
  Title:
    Return a sorted list of objects

  Description:
    You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

  Examples:
    When sorted by "a", this:

    [
      {"a": 1, "b": 3},
      {"a": 3, "b": 2},
      {"a": 2, "b": 40},
      {"a": 4, "b": 12}
    ]
    should return:

    [
      {"a": 4, "b": 12},
      {"a": 3, "b": 2},
      {"a": 2, "b": 40},
      {"a": 1, "b": 3}
    ]

  Notes:
    The values will always be numbers, and the properties will always exist.

  Kata Link:
    https://www.codewars.com/kata/return-a-sorted-list-of-objects

  Discuss Link:
    https://www.codewars.com/kata/return-a-sorted-list-of-objects/discuss

  Solutions Link:
    https://www.codewars.com/kata/return-a-sorted-list-of-objects/solutions
*/

// Long Solution
const sortList = (sortBy, list) =>
  [...list].sort((a, b) => b[sortBy] - a[sortBy])

// Function Export
module.exports = sortList
