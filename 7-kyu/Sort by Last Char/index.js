/*
  Title:
    Sort by Last Char

  Description:
    Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
    If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
    All inputs will be valid.

  Kata Link:
    https://www.codewars.com/kata/sort-by-last-char

  Discuss Link:
    https://www.codewars.com/kata/sort-by-last-char/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-by-last-char/solutions
*/

// Long Solution
/*
const last = x => {
  if (!x.trim().length) return x.split(' ')
  return x.split(' ').sort((a, b) => a[a.length - 1 ].localeCompare(b[b.length - 1]))
}
*/

// Short Solution
const last = x => x.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))

// Function Export
module.exports = last
