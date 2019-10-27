/*
  Title:
    Weird words

  Description:
    In this kata you will have to change every letter in a given string to the next letter in the alphabet.
    You will write a functionnextLetter to do this. The function will take a single parameter str (string).

  Examples:
    "Hello" --> "Ifmmp"
    "What is your name?" --> "Xibu jt zpvs obnf?"
    "zoo" --> "app"
    "zzZAaa" --> "aaABbb"

  Notes:
    spaces and special characters should remain the same. Capital letters should transfer in the same way but remain capitilized.

  Kata Link:
    https://www.codewars.com/kata/weird-words

  Discuss Link:
    https://www.codewars.com/kata/weird-words/discuss

  Solutions Link:
    https://www.codewars.com/kata/weird-words/solutions
*/

// Long Solution
const nextLetter = str => {
  return str
    .split(' ')
    .map(word => {
      const parsedWord = word
        .split('')
        .map(char => {
          const charCode = char.charCodeAt(0)

          if (char === 'z') return 'a'
          if (char === 'Z') return 'A'
          if (/\W|_/g.test(char)) return char

          return String.fromCodePoint(charCode + 1)
        })
        .join('')

      return parsedWord
    })
    .join(' ')
}

// Function Export
module.exports = nextLetter
