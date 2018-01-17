/*
  Title:

  Description:
    You are given an array strarr of strings and an integer k.
    Your task is to return the first longest string consisting of k consecutive strings taken in the array.

  Examples:
    longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

  Notes:
      n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


  Kata Link:
    https://www.codewars.com/kata/consecutive-strings

  Discuss Link:
    https://www.codewars.com/kata/consecutive-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/consecutive-strings/solutions
*/

// Long Solution
function longestConsec(strarr, k) {
  const n = strarr.length
  if (n === 0 || k > n || k <= 0) return ''

  return strarr.reduce((longest, item, i) => {
    const combined = strarr.slice(i, i + k).join('')
    return combined.length > longest.length ? combined : longest
  }, '')
}

// Function Export
module.exports = longestConsec
