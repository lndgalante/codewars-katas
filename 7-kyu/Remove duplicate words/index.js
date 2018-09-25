/*
  Title:
    Remove duplicate words

  Description:
    Your task is to remove all duplicate words from string, leaving only single (first) words entries.

  Examples:
    Input:

    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

    Output:

    'alpha beta gamma delta'

  Kata Link:
    https://www.codewars.com/kata/remove-duplicate-words

  Discuss Link:
    https://www.codewars.com/kata/remove-duplicate-words/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-duplicate-words/solutions
*/

// Long Solution
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

// Function Export
module.exports = removeDuplicateWords
