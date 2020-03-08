/*
  Title:
    How many consecutive numbers are needed?

  Description:
    Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

  Examples:
    If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

  Kata Link:
    https://www.codewars.com/kata/how-many-consecutive-numbers-are-needed

  Discuss Link:
    https://www.codewars.com/kata/how-many-consecutive-numbers-are-needed/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-consecutive-numbers-are-needed/solutions
*/

// Long Solution
/*
const consecutive = arr => {
  const isConsecutive = arr.slice(0, -1).every((value, index) => value === arr[index + 1] - 1)
  if (isConsecutive || arr.length <= 1) return 0

  let numbersLeft = 0

  for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
    if (!arr.includes(i)) numbersLeft++
  }

  return numbersLeft
}
*/

// Short Solution
const consecutive = arr => (arr.length > 0 ? Math.max(...arr) - Math.min(...arr) - arr.length + 1 : 0)

// Function Export
module.exports = consecutive
