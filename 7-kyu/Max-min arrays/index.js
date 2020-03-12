/*
  Title:
    Max-min arrays

  Description:
    In this Kata, you will be given an array of unique elements,
    and your task is to rerrange the values so that the first max value is followed by the first minimum,
    followed by second max value then second min value, etc.

  Examples:
    solve([15,11,10,7,12]) = [15,7,12,10,11]
    The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

  Kata Link:
    https://www.codewars.com/kata/max-min-arrays

  Discuss Link:
    https://www.codewars.com/kata/max-min-arrays/discuss

  Solutions Link:
    https://www.codewars.com/kata/max-min-arrays/solutions
*/

// Long Solution
/*
const solve = arr => {
  const result = []
  const ascendant = [...arr].sort((a, b) => a - b)

  const mid = ascendant.length / 2
  const min = ascendant.slice(0, mid)
  const max = ascendant.slice(mid).reverse()

  for (let index = 0; index < max.length; index++) {
    result.push(max[index])
    if (min[index]) result.push(min[index])
  }

  return result
}
*/

// Short Solution
const solve = array => {
  const sorted = [...array].sort((a, b) => a - b)
  return array.map((_, index) => (index % 2 === 0 ? sorted.pop() : sorted.shift()))
}

// Function Export
module.exports = solve
