/*
  Title:
    Enumerable Magic #5- True for Just One?

  Description:
    Create a method one? (JS one) that accepts two params,
    a list and a block (JS: a function), and returns true only if the block (/function) returns true for exactly one item in the array

  Notes:
    Ruby: If you need help, here's a reference:
    http://www.rubycuts.com/enum-one

  Kata Link:
    https://www.codewars.com/kata/enumerable-magic-number-5-true-for-just-one

  Discuss Link:
    https://www.codewars.com/kata/enumerable-magic-number-5-true-for-just-one/discuss

  Solutions Link:
    https://www.codewars.com/kata/enumerable-magic-number-5-true-for-just-one/solutions
*/

// Long Solution
/*
const one = (arr, fun) => {
  let times = 0

  for (const element of arr) {
    if (fun(element)) times++
  }

  return times === 1
}
*/

// Short Solution
const one = (arr, fun) => arr.filter(fun).length === 1

// Function Export
module.exports = one
