/*
  Title:
    Total amount of points

  Description:
    Our football team finished the championship.
    The result of each match look like "x:y". Results of all matches are recorded in the array.

    For example:
    ["3:1", "2:2", "0:1", ...]

    Write a function that takes such list and counts the points of our team in the championship.

    Rules for counting points for each match:
      if x>y - 3 points
      if x<y - 0 point
      if x=y - 1 point

  Notes:
    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4

  Kata Link:
    https://www.codewars.com/kata/total-amount-of-points

  Discuss Link:
    https://www.codewars.com/kata/total-amount-of-points/discuss

  Solutions Link:
    https://www.codewars.com/kata/total-amount-of-points/solutions
*/

// Long Solution
/*
const points = games =>
  games.reduce((total, result) => {
    const [x, y] = result.split(':').map(Number)
    if (x > y) return total + 3
    if (x < y) return total
    return total + 1
  }, 0)
*/

// Short Solution
const points = games => games.reduce((total, [x, _, y]) => total + (x > y ? 3 : x === y), 0)

// Function Export
module.exports = points
