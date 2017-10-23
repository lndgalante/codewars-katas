/* 
  Title:
    Selective Array Reversing

  Description:
    Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

  Examples:
    selReverse([1,2,3,4,5,6], 2)
    //=> [2,1, 4,3, 6,5]
    if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

    selReverse([2,4,6,8,10,12,14,16], 3)
    //=> [6,4,2, 12,10,8, 16,14]
    selReverse(array, length)

    array - array to reverse
    length - length of each portion to reverse

  Notes: 
    If the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.
  
  Link:
    https://www.codewars.com/kata/58f6000bc0ec6451960000fd
*/

// Long Solution
function selReverse(array, length) {
  if (length > array.length) return array.reverse()
  if (length === 0) return array

  const result = []

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      result.push(...array.slice(i, length).reverse())
    } else {
      result.push(
        ...array.slice(result.length, result.length + length).reverse()
      )
    }
  }

  return result
}

// Short Solution
function selReverse(array, length) {
  if (length === 0) return array
  const result = []

  for (let i = 0; i < array.length; i += length)
    result.push(...array.slice(i, i + length).reverse())

  return result
}

// Test to pass
console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3))
// => It should return [6,4,2, 12,10,8, 16,14], "Wrong result")
console.log(selReverse([1, 2, 3, 4, 5, 6], 2))
// => It should return [2,1, 4,3, 6,5], "Wrong result")
