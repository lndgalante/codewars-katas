/*
  Title:
    Alphabetize a list by the nth character

  Description:
    Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n).
    The function should alphabetize the list based on the nth letter of each word.

    The letters should be compared case-insensitive.
    If both letters are the same, order them normally (lexicographically), again, case-insensitive.

  Examples:
    function sortIt('bid, zag', 2) //=> 'zag, bid'

  Notes:
    The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead.

  Kata Link:
    https://www.codewars.com/kata/alphabetize-a-list-by-the-nth-character

  Discuss Link:
    https://www.codewars.com/kata/alphabetize-a-list-by-the-nth-character/discuss

  Solutions Link:
    https://www.codewars.com/kata/alphabetize-a-list-by-the-nth-character/solutions
*/

// Long Solution
const sortIt = (list, n) =>
  list
    .split(', ')
    .sort((a, b) => {
      const charCodeA = a.toLowerCase().charCodeAt(n - 1)
      const charCodeB = b.toLowerCase().charCodeAt(n - 1)

      return charCodeA === charCodeB
        ? a.localeCompare(b)
        : charCodeA - charCodeB
    })
    .join(', ')

// Function Export
module.exports = sortIt
