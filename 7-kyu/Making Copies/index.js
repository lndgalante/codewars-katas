/*
  Title:
    Making Copies

  Description:
    Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

    Note that you may have troubles if you do not return an actual copy, item by item,
    just a pointer or an alias for an existing list or array.

    If not a list or array is given as a parameter in interpreted languages,
    the function should raise an error.

  Examples:
    t = [1, 2, 3, 4]
    tCopy = copyList(t)
    t[1] += 5
    t = [1, 7, 3, 4]
    tCopy = [1, 2, 3, 4]

  Kata Link:
    https://www.codewars.com/kata/making-copies

  Discuss Link:
    https://www.codewars.com/kata/making-copies/discuss

  Solutions Link:
    https://www.codewars.com/kata/making-copies/solutions
*/

// Long Solution
// const copyList = l => l.slice()

// Short Solution
const copyList = l => [...l]

// Function Export
module.exports = copyList
