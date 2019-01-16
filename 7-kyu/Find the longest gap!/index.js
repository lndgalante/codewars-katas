/*
  Title:
    Find the longest gap!

  Description:
    A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of  num.

    Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
    The function should return 0 if num doesn't contain a binary gap.

  Examples:
    9 has binary representation 1001 and contains a binary gap of length 2.
    529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
    20 has binary representation 10100 and contains one binary gap of length 1.
    15 has binary representation 1111 and has 0 binary gaps.

  Kata Link:
    https://www.codewars.com/kata/find-the-longest-gap

  Discuss Link:
    https://www.codewars.com/kata/find-the-longest-gap/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-longest-gap/solutions
*/

// Long Solution
/*
const gap = num => {
  const binaries = [...num.toString(2)]
  let longestGap = 0
  let currentGap = 0

  for (const binary of binaries) {
    if (binary === '0') currentGap++

    if (binary === '1') {
      if (currentGap > longestGap) longestGap = currentGap
      currentGap = 0
    }
  }

  return longestGap
}
*/

// Short Solution
const gap = num => Math.max(...(num.toString(2).match(/(?=1)*(0)+(?=1)/g) || ['']).map(({ length }) => length))

// Function Export
module.exports = gap
