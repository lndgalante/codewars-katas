/* eslint guard-for-in: 0 */

/*
  Title:
    Building Strings From a Hash

  Description:
    Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby)
    passed in and generates a human readable string from its key/value pairs.

    The format should be "KEY = VALUE".
    Each key/value pair should be separated by a comma except for the last pair.

  Examples:
    solution({a: 1, b: '2'})
      // should return "a = 1,b = 2"


  Kata Link:
    https://www.codewars.com/kata/building-strings-from-a-hash

  Discuss Link:
    https://www.codewars.com/kata/building-strings-from-a-hash/discuss

  Solutions Link:
    https://www.codewars.com/kata/building-strings-from-a-hash/solutions
*/

// Long Solution
function solution(pairs) {
  const result = []

  for (const key in pairs) {
    result.push(`${key} = ${pairs[key]}`)
  }

  return result.join()
}

// Short solution 1
/*
const solution = pairs =>
  Object.keys(pairs)
    .map(key => `${key} = ${pairs[key]}`)
    .join() *
    /

// Short Solution 2
/*
const solution = pairs =>
Object.entries(pairs)
.map(entry => entry.join(' = '))
.join(',')
*/

// It works but this kata has no support for Node 8.1.3

// Function Export
module.exports = solution
