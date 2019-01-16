/*
  Title:
    Show multiples of 2 numbers within a range

  Description:
    Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.
    Python, Javascript, Java versions: return results in a list/array

  Notes:
    Do NOT worry about checking zeros or negative values.
    To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

  Kata Link:
    https://www.codewars.com/kata/show-multiples-of-2-numbers-within-a-range

  Discuss Link:
    https://www.codewars.com/kata/show-multiples-of-2-numbers-within-a-range/discuss

  Solutions Link:
    https://www.codewars.com/kata/show-multiples-of-2-numbers-within-a-range/solutions
*/

// Long Solution
const multiples = (s1, s2, s3) =>
  Array.from({ length: s3 - 1 }, (_, index) => index + 1).filter(number => number % s1 === 0 && number % s2 === 0)

// Function Export
module.exports = multiples
