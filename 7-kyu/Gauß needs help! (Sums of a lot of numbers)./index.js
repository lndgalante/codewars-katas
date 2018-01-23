/*
  Title:
    Gauß needs help! (Sums of a lot of numbers).

  Description:
    Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner,
    to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time,
    while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

    Your task is to help the young Carl Friedrich to solve this problem as quickly as you can;
    so, he can astonish his teacher and rescue his recreation interval.

    It's your duty to verify that n is a valid positive integer number.

  Examples:
    f(n=100) // returns 5050

  Notes:
    The goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

    Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

  Kata Link:
    https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers

  Discuss Link:
    https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/solutions
*/

// Long Solution
/*
function f(n) {
  if (!Number.isInteger(n) || Math.sign(n) === -1) return false

  let result = 0

  for (let i = 0; i <= n; i++) {
    result += i
  }

  return result
}
*/

// Short Solution
/*
const f = n =>
  !Number.isInteger(n) || Math.sign(n) !== 1
    ? false
    : Array.from(Array(n + 1), (_, i) => i).reduce((total, num) => total + num)
*/

// Alternative Solution
const f = n => (Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false)

// Function Export
module.exports = f
