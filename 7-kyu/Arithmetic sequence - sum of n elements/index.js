/*
  Title:
    Arithmetic sequence - sum of n elements

  Description:
    In your class, you have started lessons about "arithmetic progression".
    Because you are also a programmer, you have decided to write a function.

    This function, arithmetic_sequence_sum(a, r, n),
    should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a),
    and a number of occurences of the given integer (r), based on the element's position within the sequence.

  Examples:
    arithmetic_sequence_sum(2, 3, 5) should return 40:

    1     2        3          4            5
    a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r)
    2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40

  Kata Link:
    https://www.codewars.com/kata/arithmetic-sequence-sum-of-n-elements

  Discuss Link:
    https://www.codewars.com/kata/arithmetic-sequence-sum-of-n-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/arithmetic-sequence-sum-of-n-elements/solutions
*/

// Long Solution
/*
const arithmeticSequenceSum = (a, r, n) =>
  Array.from({ length: n }, (_, index) => (index === 0 ? a : a + r * index)).reduce((value, number) => value + number)
*/

// Short Solution
const arithmeticSequenceSum = (a, r, n) => (n / 2) * (2 * a + (n - 1) * r)

// Function Export
module.exports = arithmeticSequenceSum
