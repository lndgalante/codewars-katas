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

// Function Export
module.exports = findOdd
