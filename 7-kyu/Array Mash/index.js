/*
  Title:
    Array Mash

  Description:
    Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays.
    Both arrays will always be the same length.

  Examples:
    eg. [1,2,3] + ['a','b','c'] =  [1, 'a', 2, 'b', 3, 'c']

  Kata Link:
    https://www.codewars.com/kata/array-mash

  Discuss Link:
    https://www.codewars.com/kata/array-mash/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-mash/solutions
*/

// Long Solution
/*
const arrayMash = (array1, array2) => {
  const result = []

  for (let i = 0; i < array1.length; i++) result.push(array1[i], array2[i])

  return result
}
*/

// Short Solution
/*
const arrayMash = (array1, array2) => array1.flatMap((number, index) => [number, array2[index]])
*/

// Shorter Solution
const arrayMash = (array1, array2) => array1.reduce((acc, number, index) => [...acc, number, array2[index]], [])

// Function Export
module.exports = arrayMash
