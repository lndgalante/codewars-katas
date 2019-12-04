/*
  Title:
    Maxed Out

  Description:
    For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

    If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

    You can assume that you will receive a valid array of numbers.

  Kata Link:
    https://www.codewars.com/kata/maxed-out

  Discuss Link:
    https://www.codewars.com/kata/maxed-out/discuss

  Solutions Link:
    https://www.codewars.com/kata/maxed-out/solutions
*/

// Long Solution
const maxedOut = arr => {
  const result = arr.reduce((acc, number) => acc + number ** 3, 0)
  return result > Number.MAX_SAFE_INTEGER ? `You've pushed me to the max!` : result
}

// Function Export
module.exports = maxedOut
