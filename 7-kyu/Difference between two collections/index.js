/*
  Title:
    Difference between two collections

  Description:
    Find the difference between two collections.
    The difference means that either the character is present in one collection or it is present in other, but not in both.
    Return a sorted set with difference.
    The collections can contain any character and can contain duplicates.

  Examples:
    A = [a,a,t,e,f,i,j]
    B = [t,g,g,i,k,f]

    difference = [a,e,g,j,k]

  Kata Link:
    https://www.codewars.com/kata/difference-between-two-collections

  Discuss Link:
    https://www.codewars.com/kata/difference-between-two-collections/discuss

  Solutions Link:
    https://www.codewars.com/kata/difference-between-two-collections/solutions
*/

// Long Solution
/*
const diff = (a, b) => {
  const intersection = a.filter(char => b.includes(char))
  const difference = [...a, ...b].filter(char => !intersection.includes(char))

  return [...new Set(difference)].sort((a, b) => a.localeCompare(b))
}
*/

// Lodash Solution
/*
const { xor } = require('lodash')
const diff = (a, b) => xor(a, b).sort()
*/

// Short Solution
const diff = (a, b) => [...new Set([...a, ...b].filter(char => a.includes(char) ^ b.includes(char)))].sort()

// Function Export
module.exports = diff
