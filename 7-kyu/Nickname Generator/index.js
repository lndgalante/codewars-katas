/*
  Title:
    Nickname Generator

  Description:
    Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

    If the 3rd letter is a consonant, return the first 3 letters.
    nickname("Robert") //=> "Rob"
    nickname("Kimberly") //=> "Kim"
    nickname("Samantha") //=> "Sam"

    If the 3rd letter is a vowel, return the first 4 letters.
    nickname("Jeannie") //=> "Jean"
    nickname("Douglas") //=> "Doug"
    nickname("Gregory") //=> "Greg"

    If the string is less than 4 characters, return "Error: Name too short".

  Notes:
    - Vowels are "aeiou", so discount the letter "y".
    - Input will always be a string.
    - Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
    - The input can be modified

  Kata Link:
    https://www.codewars.com/kata/nickname-generator

  Discuss Link:
    https://www.codewars.com/kata/nickname-generator/discuss

  Solutions Link:
    https://www.codewars.com/kata/nickname-generator/solutions
*/

// Long Solution
/*
const nicknameGenerator = name => {
  if (name.length <= 3) return 'Error: Name too short'
  return /[aeiou]/i.test(name[2]) ? name.substr(0, 4) : name.substr(0, 3)
}
*/

// Short Solution
const nicknameGenerator = name =>
  name.length <= 3 ? 'Error: Name too short' : /[aeiou]/i.test(name[2]) ? name.substring(0, 4) : name.substring(0, 3)

// Function Export
module.exports = nicknameGenerator
