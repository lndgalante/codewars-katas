/*
  Title:
    esreveR

  Description:
    Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

  Kata Link:
    https://www.codewars.com/kata/esrever

  Discuss Link:
    https://www.codewars.com/kata/esrever/discuss

  Solutions Link:
    https://www.codewars.com/kata/esrever/solutions
*/

// Long Solution
/*
const reverse = array => {
  const reversed = []

  for (let i = array.length - 1; i >= 0; i--) reversed.push(array[i])
  return reversed
}
*/

// Short Solution
const reverse = array =>
  array.reduceRight((result, value) => [...result, value], [])

// Function Export
module.exports = reverse
