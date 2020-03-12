/*
  Title:
    Without the letter 'E'

  Description:
    Is it possible to write a book without the letter 'e' ?

    Task
    - Given String str, return:
    - How much "e" does it contains (case-insensitive) - return number as String.
    - If given String doesn't contain any "e", return: "There is no "e"."
    - If given String is empty, return empty String.
    - If given String is null/None/nil, return null/None/nil

  Kata Link:
    https://www.codewars.com/kata/without-the-letter-e

  Discuss Link:
    https://www.codewars.com/kata/without-the-letter-e/discuss

  Solutions Link:
    https://www.codewars.com/kata/without-the-letter-e/solutions
*/

// Long Solution
/*
const findE = str => {
  if (str === '') return ''
  if (!str) return str
  if (!/e/gi.test(str)) return 'There is no "e".'

  return String([...str].reduce((total, char) => (/e/gi.test(char) ? total + 1 : total), 0))
}
*/

// Short Solution
const findE = string => (string ? String((string.match(/e/gi) || []).length || 'There is no "e".') : string)

// Function Export
module.exports = findE
