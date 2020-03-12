/*
  Title:
    How many are smaller than me?

  Description:
    Write function smaller(arr) that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

  Examples:
    smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
    smaller([1, 2, 0]) === [1, 1, 0]

  Kata Link:
    https://www.codewars.com/kata/how-many-are-smaller-than-me

  Discuss Link:
    https://www.codewars.com/kata/how-many-are-smaller-than-me/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-are-smaller-than-me/solutions
*/

// Long Solution
/*
const smaller = arr => {
  const result = []
  let temp

  for (let i = 0; i < arr.length; i++) {
    temp = 0

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) temp += 1
    }

    result.push(temp)
  }

  return result
}
*/

// Short Solution
/*
const smaller = arr =>
  arr.map((number, index) => {
    const totalSmaller = arr
      .slice(index)
      .reduce((total, numberToCompare) => (numberToCompare < number ? total + 1 : total), 0)

    return totalSmaller
  })
*/

// Shorter Solution
const smaller = array =>
  array.map((number, index) => array.slice(index).filter(numberToCompare => number > numberToCompare).length)

// Function Export
module.exports = smaller
