/* 
  Title:
    Counting Duplicates

  Description:
    Write a function that will return the count of distinct case-insensitive alphabetic
    characters and numeric digits that occur more than once in the input string. 
    The input string can be assumed to contain only alphabets (both uppercase and lowercase)
    and numeric digits.

  Examples:
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice

  Link:
    https://www.codewars.com/kata/counting-duplicates
*/

// Long Solution
/* 
function duplicateCount(text) {
  const arr = text.toLowerCase().split('')
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).includes(arr[i])) {
      result.push(arr[i])
    }
  }

  return Array.from(new Set(result)).length
} 
*/

// Short Solution
const duplicateCount = text =>
  (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length

// Regex -> https://regexr.com/3i7es
/* 
  ([^]) Capture any character, as . doesn't literally match every character.
  \\1+ Followed by itself one or more times (the \1 corresponding to the first capture group)
 */

// Function Export
module.exports = duplicateCount
