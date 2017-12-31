/*
  Title:
    Rot13

  Description:
    ROT13 is a simple letter substitution cipher that replaces a letter
    with the letter 13 letters after it in the alphabet.
    ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13.
    If there are numbers or special characters included in the string, they should be returned as they are.
    Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

  Kata Link:
    https://www.codewars.com/kata/rot13-1

  Discuss Link:
    https://www.codewars.com/kata/rot13-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/rot13-1/solutions
*/

// Long Solution
/*
const rot13 = message =>
  message.replace(/[A-Z]/gi, char => {
    const charCode = char.charCodeAt()

    if (charCode >= 65 && charCode <= 90) {
      return charCode < 78
        ? String.fromCharCode(charCode + 13)
        : String.fromCharCode(charCode - 13)
    }

    if (charCode >= 97 && charCode <= 122) {
      return charCode < 110
        ? String.fromCharCode(charCode + 13)
        : String.fromCharCode(charCode - 13)
    }
  })
*/

// Short Solution
const rot13 = message => {
  const englishAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const rot13Alphabet = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'

  return message.replace(
    /[a-z]/gi,
    char => rot13Alphabet[englishAlphabet.indexOf(char)]
  )
}

// Function Export
module.exports = rot13
