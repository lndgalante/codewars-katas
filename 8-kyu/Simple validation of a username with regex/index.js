/*
  Title:
    Simple validation of a username with regex

  Description:
    Write a simple regex to validate a username.

    Allowed characters are:
      -lowercase letters
      -numbers
      -underscore

    Length should be between 4 and 16 characters.

  Kata Link:
    https://www.codewars.com/kata/simple-validation-of-a-username-with-regex

  Discuss Link:
    https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-validation-of-a-username-with-regex/solutions
*/

// Long Solution
const validateUsr = username => /^([a-z]|[\d]|[_]){4,16}$/.test(username)

// Function Export
module.exports = validateUsr
