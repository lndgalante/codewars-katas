/*
  Title:
    Sentence Smash

  Description:
    Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

    * You can assume that you are only given words.
    * You cannot assume the size of the array.
    * You can assume that you will always get an array.

    We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

  Examples:
    var words = ['hello', 'world', 'this', 'is', 'great'];
    smash(words); // returns "hello world this is great"

  Notes:
    This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.

  Kata Link:
    https://www.codewars.com/kata/sentence-smash

  Discuss Link:
    https://www.codewars.com/kata/sentence-smash/discuss

  Solutions Link:
    https://www.codewars.com/kata/sentence-smash/solutions
*/

// Long Solution
const smash = words => words.join(' ')

// Function Export
module.exports = smash
