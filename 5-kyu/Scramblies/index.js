/*
  Title:
    Scramblies

  Description:
    Write function scramble(str1, str2) that returns true if a portion
    of str1 characters can be rearranged to match str2, otherwise returns false.

  Examples:
    str1 is 'rkqodlw' and str2 is 'world' the output should return true.
    str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
    str1 is 'katas' and str2 is 'steak' should return false.

  Notes:
    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered

  Kata Link:
    https://www.codewars.com/kata/scramblies

  Discuss Link:
    https://www.codewars.com/kata/scramblies/discuss

  Solutions Link:
    https://www.codewars.com/kata/scramblies/solutions
*/

// Long Solution
function scramble(str1, str2) {
  const array1 = str1.split('').sort()
  const array2 = str2.split('').sort()
  let i = 0
  let x

  for (x = 0, i = 0; i < array2.length && x <= array1.length; x++) {
    if (array2[i] === array1[x]) i++
  }

  return x <= array1.length
}

// Function Export
module.exports = scramble
