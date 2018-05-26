/*
  Title:
    Merge two sorted arrays into one

  Description:
    You are given two sorted arrays that contain only integers.
    Your task is to find a way to merge them into a single one, sorted in ascending order.
    Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

    You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers.
    If both arr1 and arr2 are empty, then just return an empty array.

  Examples:
    arr1 = [1, 2, 3, 4, 5];
    arr2 = [6, 7, 8, 9, 10];
    mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    arr3 = [1, 3, 5, 7, 9];
    arr4 = [10, 8, 6, 4, 2];
    mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    arr5 = [1, 3, 5, 7, 9, 11, 12];
    arr6 = [1, 2, 3, 4, 5, 10, 12];
    mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

  Kata Link:
    https://www.codewars.com/kata/merge-two-sorted-arrays-into-one

  Discuss Link:
    https://www.codewars.com/kata/merge-two-sorted-arrays-into-one/discuss

  Solutions Link:
    https://www.codewars.com/kata/merge-two-sorted-arrays-into-one/solutions
*/

// Lodash Solution
/*
const _ = require('lodash')

const mergeArrays = (arr1, arr2) => _.sortBy(_.union(arr1, arr2))
*/

// Long Solution
const mergeArrays = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)

// Function Export
module.exports = mergeArrays
