/*
  Title:
    Word Count

  Description:
    Can you realize a function that returns word count from a given string?
    You have to ensure that spaces in string is a whitespace for real.

    What kind of tests we got for your code:

    Function have to count words, but not spaces, so be sure that it does right.
    Empty string has no words.
    String with spaces around should be trimmed.
    Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
    Be sure that words with chars like -, ', ` are counted right.

  Examples:
    countWords("Hello"); // returns 1 as int
    countWords("Hello, World!") // returns 2
    countWords("No results for search term `s`") // returns 6
    countWords(" Hello") // returns 1
    // ... and so on

  Kata Link:
    https://www.codewars.com/kata/word-count

  Discuss Link:
    https://www.codewars.com/kata/word-count/discuss

  Solutions Link:
    https://www.codewars.com/kata/word-count/solutions
*/

// Long Solution
const countWords = str => str.split(/\s/g).filter(Boolean).length

// Function Export
module.exports = countWords
