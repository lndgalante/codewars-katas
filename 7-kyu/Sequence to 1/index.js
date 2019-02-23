/*
  Title:
    Sequence to 1

  Description:
    Get the number n to return the sequence from n to 1.
    The number n can be negative and also large number. (See the range as the following)

    Range :
    Python     -9999999 < n < 9999999
    Javascript -9999 < n < 9999
    c++        -9999 < n < 9999
    Crystal    -9999 < n < 9999
    Ruby       -9999 < n < 9999


  Examples:
    n=5  >> [5,4,3,2,1]
    n=-1 >> [-1,0,1]

  Kata Link:
    https://www.codewars.com/kata/sequence-to-1

  Discuss Link:
    https://www.codewars.com/kata/sequence-to-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/sequence-to-1/solutions
*/

// Long Solution
const seqToOne = n =>
  Array.from({ length: n <= 0 ? Math.abs(n) + 2 : n }, (_, index) => (n <= 1 ? n + index : n - index))

// Function Export
module.exports = seqToOne
