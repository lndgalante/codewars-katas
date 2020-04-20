/*
  Title:
    Password validator

  Description:
    Your job is to create a simple password validation function, as seen on many websites.

    The rules for a valid password are as follows:
      - There needs to be at least 1 uppercase letter.
      - There needs to be at least 1 lowercase letter.
      - There needs to be at least 1 number.
      - The password needs to be at least 8 characters long.

    You are permitted to use any methods to validate the password.

  Examples:
    password("Abcd1234"); ===> true
    password("Abcd123"); ===> false
    password("abcd1234"); ===> false
    password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
    password("ABCD1234"); ===> false
    password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
    password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;

  Notes:
    You will only be passed strings.
    The string can contain any standard keyboard character.
    Accepted strings can be any length, as long as they are 8 characters or more.

  Kata Link:
    https://www.codewars.com/kata/56a921fa8c5167d8e7000053

  Discuss Link:
    https://www.codewars.com/kata/56a921fa8c5167d8e7000053/discuss

  Solutions Link:
    https://www.codewars.com/kata/56a921fa8c5167d8e7000053/solutions
*/

// Long Solution
/*
function getValidators() {
  const atLeastOneUppercaseLetter = /[A-Z]+/g
  const atLeastOneLowercaseLetter = /[a-z]+/g
  const atLeastOneNumber = /[0-9]+/g
  const atLeastEightCharacters = /.{8,}/g

  return [atLeastOneUppercaseLetter, atLeastOneLowercaseLetter, atLeastOneNumber, atLeastEightCharacters]
}

const password = (string) => getValidators().every((validator) => validator.test(string))
*/

// Short Solution
const password = (string) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(string)

// Function Export
module.exports = password
