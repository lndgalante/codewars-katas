/*
  Title:
    Two to One

  Description:
    Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

    Each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
    a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

  Kata Link:
    https://www.codewars.com/kata/two-to-one

  Discuss Link:
    https://www.codewars.com/kata/two-to-one/discuss

  Solutions Link:
    https://www.codewars.com/kata/two-to-one/solutions
*/

// Long Solution
function longest(s1, s2) {
  const a = s1.split('')
  const b = s2.split('')

  return [...new Set([...a, ...b])].sort().join('')
}

// Function Export
module.exports = longest
