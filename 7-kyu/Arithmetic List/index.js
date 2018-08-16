/*
  Title:
    Arithmetic List!

  Description:
    In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.

    You will be given three parameters :
      - first the first term in the sequence
      - c the constant that you are going to ADD ( since it is an arithmetic sequence...)
      - l the number of terms that should be returned

  Notes:
    Useful link: https://en.wikipedia.org/wiki/Sequence

  Kata Link:
    https://www.codewars.com/kata/arithmetic-list

  Discuss Link:
    https://www.codewars.com/kata/arithmetic-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/arithmetic-list/solutions
*/

// Long Solution
const seqlist = (first, c, l) =>
  Array.from({ length: l }, (value, index) => first + c * index)

// Function Export
module.exports = seqlist
