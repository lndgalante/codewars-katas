/*
  Title:
    Array Appender

  Description:
    Write a function called appendArrays that appends the items from array 2 onto array 1, returning the newly formed array.

    For example if your 2 arrays were:

    var array1 = [a,b,c]
    var array2 = [1,2,3]

    After using your appendArrays function, the result should be [a,b,c,1,2,3]

    Your function should also be able to handle nested arrays.

    For example, combining array [['x','x'],'B'] with array ['c','D'] should return [['x','x'],'B','c','D'].

    Your solution should account for a situation for either the first or second inputs aren't actually arrays.

    // basic test
    Test.assertSimilar(appendArrays(['this'],['that']), ['this','that'])

    // second input is not an array
    Test.assertSimilar(appendArrays([1,2], [1]), [1,2,1])

    // first input is not an array
    Test.assertSimilar(appendArrays([2], [1,1,1]), [2,1,1,1])

  Kata Link:
    https://www.codewars.com/kata/array-appender

  Discuss Link:
    https://www.codewars.com/kata/array-appender/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-appender/solutions
*/

// Long Solution
const appendArrays = (arr1, arr2) => [...arr1, ...arr2]

// Function Export
module.exports = appendArrays
