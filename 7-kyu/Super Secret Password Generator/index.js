/*
  Title:
    Super Secret Password Generator

  Description:
    Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.
    Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.
    eg. replace all 'a's with '@'s.  Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.

  Kata Link:
    https://www.codewars.com/kata/super-secret-password-generator

  Discuss Link:
    https://www.codewars.com/kata/super-secret-password-generator/discuss

  Solutions Link:
    https://www.codewars.com/kata/super-secret-password-generator/solutions
*/

// Long Solution
/*
const createSSP = password => {
  const superSecretChars = [['a', '@'], ['s', '$'], ['o', '0'], ['h', '5'], ['x', '*']]
  const dictionary = superSecretChars.reduce((dictionary, chars) => ({ ...dictionary, [chars[0]]: chars[1] }), {})

  return [...password].map(char => dictionary[char.toLowerCase()] || char).join('')
}
*/

// Short Solution
const dictionary = { a: '@', s: '$', o: 0, h: 5, x: '*' }
const createSSP = password => password.replace(/[asohx]/gi, match => dictionary[match.toLowerCase()])

// Function Export
module.exports = createSSP
