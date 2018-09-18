/*
  Title:
    Inspiring Strings

  Description:
    When given a string of space separated words, return the word with the longest length.
    If there are multiple words with the longest length, return the last instance of the word with the longest length.

  Examples:
    'red white blue' //returns string value of white
    'red blue gold' //returns gold

  Kata Link:
    https://www.codewars.com/kata/inspiring-strings

  Discuss Link:
    https://www.codewars.com/kata/inspiring-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/inspiring-strings/solutions
*/

// Long Solution
/*
const longestWord = stringOfWords => {
  const str = stringOfWords.split(' ')

  let temp = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i].length >= temp.length) {
      temp = str[i]
    }
  }

  return temp
}
*/

// Short Solution
const longestWord = stringOfWords =>
  stringOfWords
    .split(' ')
    .reduceRight((prev, curr) => (curr.length > prev.length ? curr : prev))

// Function Export
module.exports = longestWord
