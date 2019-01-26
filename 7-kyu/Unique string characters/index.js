/*
  Title:
    Unique string characters

  Description:
    In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

  Examples:
    solve("xyab","xzca") = "ybzc"
    --The first string has 'yb' which is not in the second string.
    --The second string has 'zc' which is not in the first string.

  Notes:
    Notice also that you return the characters from the first string concatenated with those from the second string.

  Kata Link:
    https://www.codewars.com/kata/unique-string-characters

  Discuss Link:
    https://www.codewars.com/kata/unique-string-characters/discuss

  Solutions Link:
    https://www.codewars.com/kata/unique-string-characters/solutions
*/

// Long Solution
/*
const solve = (a, b) =>
  [[...a].filter(char => !b.includes(char)).join(''), [...b].filter(char => !a.includes(char)).join('')].join('')
*/

// Short Solution
const solve = (a, b) => [...a, ...b].filter(char => b.includes(char) ^ a.includes(char)).join('')

// Function Export
module.exports = solve
