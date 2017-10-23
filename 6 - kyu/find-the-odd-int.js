/* 
  Title:
    Find the odd int

  Description:
    Given an array, find the int that appears an odd number of times.

    There will always be only one integer that appears an odd number of times.
  
  Link:
    https://www.codewars.com/kata/54da5a58ea159efa38000836
*/

function findOdd(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    let counter = 0

    for (let j = 0; j < array.length; j++) if (element === array[j]) counter++

    if (counter % 2 !== 0) return element
  }
}

// Test to pass
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
// => It shoud return 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))
// => It shoud return -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))
// => It shoud return 5
console.log(findOdd([10]))
// => It shoud return 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
// => It shoud return 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))
// => It shoud return 1
