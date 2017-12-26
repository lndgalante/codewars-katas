/*
  Title:
    Count of positives / sum of negatives

  Description:
    Given an array of integers.

    Return an array, where the first element is the count of positives numbers and
    the second element is sum of negative numbers.

    If the input array is empty or null, return an empty array:

    * C# / Java: new int[] {} / new int[0];
    * C++: std::vector<int>();
    * JavaScript / CoffeeScript / PHP / Haskell: [];
    * Rust: Vec::<i32>::new();

  Examples:
    countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
    // It should return [10, -65]

  Notes:
    The passed array should NOT be changed. Read more here ->  https://en.wikipedia.org/wiki/Side_effect_(computer_science)

  Kata Link:
    https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives

  Discuss Link:
    https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/discuss

  Solutions Link:
    https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/solutions
*/

// Long Solution
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []

  const positives = input
    .filter(num => Math.sign(num) === 1)
    .reduce(a => a + 1, 0)

  const negatives = input
    .filter(num => Math.sign(num) === -1)
    .reduce((a, b) => a + b, 0)

  return [positives, negatives]
}

// Function Export
module.exports = countPositivesSumNegatives
