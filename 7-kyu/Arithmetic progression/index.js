/*
  Title:
    Arithmetic progression

  Description:
    In your class, you have started lessons about arithmetic progression.
    Since you are also a programmer,you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a.
    Note that the difference may be zero!

    The result should be a string of numbers, separated by comma and space.

  Examples:
    # first element: 1, difference: 2, how many: 5
    arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

  Kata Link:
    https://www.codewars.com/kata/arithmetic-progression

  Discuss Link:
    https://www.codewars.com/kata/arithmetic-progression/discuss

  Solutions Link:
    https://www.codewars.com/kata/arithmetic-progression/solutions
*/

// Long Solution
/*
const arithmeticSequenceElements = (a, r, n) => {
  let count = a
  let sequence = [a]

  for (let i = 1; i < n; i++) {
    count += r
    sequence.push(count)
  }

  return sequence.join(', ')
}
*/

// Short Solution
const arithmeticSequenceElements = (a, r, n) =>
  Array.from({ length: n }, (_, index) => a + r * index).join(', ')

// Function Export
module.exports = arithmeticSequenceElements
