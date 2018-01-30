/*
  Title:
    Reversing Words in a String

  Description:
    You need to write a function that reverses the words in a given string.
     A word can also fit an empty string. If this is not clear enough, here are some examples:

    As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

  Examples:
    reverse('Hello World') === 'World Hello'
    reverse('Hi There.') === 'There. Hi'

  Kata Link:
    https://www.codewars.com/kata/reversing-words-in-a-string

  Discuss Link:
    https://www.codewars.com/kata/reversing-words-in-a-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/reversing-words-in-a-string/solutions
*/

// Long Solution
const reverse = string =>
  string
    .split(' ')
    .reverse()
    .join(' ')

// Function Export
module.exports = reverse
