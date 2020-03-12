/*
  Title:
    The highest profit wins!

  Description:
    Story:
      Ben has a very simple idea to make some profit: he buys something and sells it again.
      Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
      Instead, he's going to buy it for the lowest possible price and sell it at the highest.

    Task:
      Write a function that returns both the minimum and maximum number of the given list/array.

  Examples:
    minMax([1, 2, 3, 4, 5])   === [1, 5]
    minMax([2334454, 5])   === [5, 2334454]
    minMax([1])           === [1, 1]

  Notes:
      All arrays or lists will always have at least one element, so you don't need to check the length.
      Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

  Kata Link:
    https://www.codewars.com/kata/the-highest-profit-wins

  Discuss Link:
    https://www.codewars.com/kata/the-highest-profit-wins/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-highest-profit-wins/solutions
*/

// Long Solution
/*
function minMax(arr) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)

  return [min, max]
}
*/

// Short Solution
const minMax = array => [Math.min(...array), Math.max(...array)]

// Function Export
module.exports = minMax
