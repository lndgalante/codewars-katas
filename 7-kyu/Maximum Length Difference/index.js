/*
  Title:

  Description:
    You are given two arrays a1 and a2 of strings.
    Each string is composed with letters from a to z.
    Let x be any string in the first array and y be any string in the second array.

    Find max(abs(length(x) − length(y)))

    If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

  Better Description from comments:
  You can read the instructions in the following manner:
  For every string x in the first array and for every string y in the second array
  calculate abs(length(x) − length(y)) and then take the max of these numbers.
  The full tests of every kata are always hidden, it's the rule. Sorry for that!
  No need to post uppercase letters; it is considered as a bit rude:-)

  Examples:
    s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
    s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
    mxdiflg(s1, s2) --> 13

  Kata Link:
    https://www.codewars.com/kata/maximum-length-difference

  Discuss Link:
    https://www.codewars.com/kata/maximum-length-difference/discuss

  Solutions Link:
    https://www.codewars.com/kata/maximum-length-difference/solutions
*/

// Long Solution
/*
function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1

  const strLengths = []

  for (let i = 0; i < a1.length; i++) {
    const x = a1[i]

    for (let j = 0; j < a2.length; j++) {
      const y = a2[j]
      strLengths.push(Math.abs(x.length - y.length))
    }
  }

  return Math.max(...strLengths)
}
*/

// Short Solution
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1

  const length1 = a1.map(string => string.length)
  const length2 = a2.map(string => string.length)

  return Math.max(
    Math.max(...length1) - Math.min(...length2),
    Math.max(...length2) - Math.min(...length1)
  )
}

// Function Export
module.exports = mxdiflg
