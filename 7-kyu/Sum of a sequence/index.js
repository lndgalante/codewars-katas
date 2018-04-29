/*
  Title:
    Sum of a sequence

  Description:
    Your task is to make function, which returns the sum of a sequence of integers.

    The sequence is defined by 3 non-negative values: begin, end, step.

    If begin value is greater than the end, function should returns 0

  Examples:
    sequenceSum(2,2,2) === 2
    sequenceSum(2,6,2) === 12 // 2 + 4 + 6
    sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
    sequenceSum(1,5,3) === 5 // 1 + 4

  Kata Link:
    https://www.codewars.com/kata/sum-of-a-sequence/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/sum-of-a-sequence/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-a-sequence/train/javascript/solutions
*/

// Long Solution
/*
const sequenceSum = (begin, end, step) => {
  let result = 0

  for (let i = begin; i <= end; i += step) result += i

  return result
}
*/

// Short Solution
const sequenceSum = (begin, end, step) =>
  begin > end ? 0 : begin + sequenceSum(begin + step, end, step)

// Function Export
module.exports = sequenceSum
