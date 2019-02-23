/*
  Title:
    Wordsearch

  Description:
    Create a function wordSearch(word,text) that searches to see whether a word word is present in the given text variable.

  Examples:
    Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";
    wordSearch("prince",text)--> true
    wordSearch("beautiful",text)--> true
    wordSearch("clown",text)--> false
    wordSearch("yellow",text)--> false
    wordSearch("akes the",text)--> false

  Notes:
    Note it has to be a full word which means it is surround by a word boundary (spaces, end/start of string, various punctuation, ... ).

  Kata Link:
    https://www.codewars.com/kata/wordsearch

  Discuss Link:
    https://www.codewars.com/kata/wordsearch/discuss

  Solutions Link:
    https://www.codewars.com/kata/wordsearch/solutions
*/

// Long Solution
/*
const wordSearch = (word, text) =>
  text
    .replace(/[,.]/g, '')
    .split(' ')
    .includes(word)
*/

// Short Solution - https://regexr.com/48v2t
const wordSearch = (word, text) => new RegExp(`\\b${word}\\b`).test(text)

// Function Export
module.exports = wordSearch
