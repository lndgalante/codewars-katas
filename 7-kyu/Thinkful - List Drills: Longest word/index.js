/*
  Title:
    Thinkful - List Drills: Longest word

  Description:
    Complete the function that takes one argument, a list of words,
    and returns the length of the longest word in the list.

  Examples:
    ['simple', 'is', 'better', 'than', 'complex'] ==> 7

  Notes:
    Do not modify the input list.

  Kata Link:
    https://www.codewars.com/kata/thinkful-list-drills-longest-word

  Discuss Link:
    https://www.codewars.com/kata/thinkful-list-drills-longest-word/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinkful-list-drills-longest-word/solutions
*/

// Long Solution
/*
const longest = words => Math.max(...words.map(word => word.length))
*/

// Alternative Solution
const longest = words =>
  words.reduce((maxLength, { length }) => Math.max(maxLength, length), 0)

// Function Export
module.exports = longest
