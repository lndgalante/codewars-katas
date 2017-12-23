/*
  Title:
    Remove String Spaces

  Description:
    Simple, remove the spaces from the string, then return the resultant string.

  Kata Link:
    https://www.codewars.com/kata/remove-string-spaces

  Discuss Link:
    https://www.codewars.com/kata/remove-string-spaces/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-string-spaces/solutions
*/

// Long Solution
// const noSpace = x => x.split(' ').join('')

// Short Solution
const noSpace = x => x.replace(/\s/g, '')

/*
  Regex -> https://regexr.com/3i4oq
  \s Whitespace. Matches any whitespace character (spaces, tabs, line breaks).
*/

// Function Export
module.exports = noSpace
