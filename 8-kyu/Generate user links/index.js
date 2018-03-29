/*
  Title:
    Generate user links

  Description:
    Your task is to create userlinks for the url, you will be given a username and must return a valid link.

  Examples:
    generate_link('matt c')
    http://www.codewars.com/users/matt%20c

  Kata Link:
    https://www.codewars.com/kata/generate-user-links

  Discuss Link:
    https://www.codewars.com/kata/generate-user-links/discuss

  Solutions Link:
    https://www.codewars.com/kata/generate-user-links/solutions
*/

// Long Solution
const generateLink = user =>
  `http://www.codewars.com/users/${encodeURIComponent(user)}`

// Function Export
module.exports = generateLink
