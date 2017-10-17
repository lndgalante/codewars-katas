/* 
  Description ⚔️
    Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

  Examples:
    [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

    is transformed into

    [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

    Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

    You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
 */

function removeZeros(array) {
  const arrayWithZeros = array.filter(n => n === 0 || n === '0')
  const arrayWithoutZeros = array.filter(n => n !== 0 || n !== '0')
  return [...arrayWithoutZeros, ...arrayWithZeros]
}

const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

console.log(removeZeros(input))
// => It should return [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
