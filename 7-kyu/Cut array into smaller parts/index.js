/*
  Title:
    Cut array into smaller parts

  Description:
    Write function makeParts that will take an array as argument and the size of the chunk.

  Examples:
    If an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.

  Kata Link:
    https://www.codewars.com/kata/cut-array-into-smaller-parts

  Discuss Link:
    https://www.codewars.com/kata/cut-array-into-smaller-parts/discuss

  Solutions Link:
    https://www.codewars.com/kata/cut-array-into-smaller-parts/solutions
*/

// Long Solution
/* const makeParts = (arr, chunkSize) =>
  chunkSize >= arr.length
    ? [arr]
    : arr.reduce(
        (result, _, index, array) =>
          index % chunkSize === 0 ? [...result, array.slice(index, index + chunkSize)] : result,
        []
      )
*/

// Short Solution
const makeParts = (array, chunkSize) =>
  chunkSize >= array.length
    ? [array]
    : array.reduce(
        (result, _, index, array) =>
          index % chunkSize === 0 ? [...result, array.slice(index, index + chunkSize)] : result,
        []
      )

// Function Export
module.exports = makeParts
