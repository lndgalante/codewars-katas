/*
  Title:
    They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it series #1:
    Are they opposite?

  Description:
    Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false.

    The opposite means: All letters of the two strings are the same, but the case is opposite.
    You can assume that the string only contains letters or it's a empty string

  Examples:
    isOpposite("ab","AB") should return true;
    isOpposite("aB","Ab") should return true;
    isOpposite("aBcd","AbCD") should return true;
    isOpposite("AB","Ab") should return false;
    isOpposite("","") should return false;

  Notes:
    The result should be a boolean value, instead of a string.

  Kata Link:
    https://www.codewars.com/kata/they-say-that-only-the-name-is-long-enough-to-attract-attention-they-also-said-that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-1-are-they-opposite

  Discuss Link:
    https://www.codewars.com/kata/they-say-that-only-the-name-is-long-enough-to-attract-attention-they-also-said-that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-1-are-they-opposite/discuss

  Solutions Link:
    https://www.codewars.com/kata/they-say-that-only-the-name-is-long-enough-to-attract-attention-they-also-said-that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-1-are-they-opposite/solutions
*/

// Long Solution
/* const isLowerCase = char => char === char.toLowerCase()

const isOpposite = (s1, s2) => {
  if (!s1 || !s2) return false
  if (s1.toLowerCase() !== s2.toLowerCase()) return false

  const s1Splitted = s1.split('')
  const s2Splitted = s2.split('')
  return s1Splitted.every((charS1, index) => charS1 !== s2Splitted[index])
} */

// Short Solution
const isOpposite = (s1, s2) => {
  if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false

  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) === s2.charAt(i)) return false
  }

  return true
}

// Function Export
module.exports = isOpposite
