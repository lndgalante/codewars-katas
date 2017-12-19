/* 
  Title:
    Two to One

  Description:
    Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

    Each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
    a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
  
  Link:
    https://www.codewars.com/kata/two-to-one/
*/

// Long Solution
function longest(s1, s2) {
  const a = s1.split('')
  const b = s2.split('')

  const result = Array.from(new Set([...a, ...b]))
    .sort()
    .join('')

  return result
}

// Function Export
module.exports = longest
