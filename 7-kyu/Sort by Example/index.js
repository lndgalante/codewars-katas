/*
  Title:
    Sort by Example

  Description:
    Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.
    Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

  Examples:
    Arr:
    [1,3,4,4,4,4,5]

    Example Arr:
    [4,1,2,3,5]

    Result:
    [4,4,4,4,1,3,5]

  Kata Link:
    https://www.codewars.com/kata/sort-by-example

  Discuss Link:
    https://www.codewars.com/kata/sort-by-example/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-by-example/solutions
*/

// Long Solution
const exampleSort = (arr, exampleArr) => [...arr].sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b))

// Function Export
module.exports = exampleSort
