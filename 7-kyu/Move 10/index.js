/*
  Title:
    Move 10

  Description:
    Move every letter in the provided string forward 10 letters through the alphabet.
    If it goes past 'z', start again at 'a'.
    Input will be a string with length > 0.

  Kata Link:
    https://www.codewars.com/kata/move-10

  Discuss Link:
    https://www.codewars.com/kata/move-10/discuss

  Solutions Link:
    https://www.codewars.com/kata/move-10/solutions
*/

// Long Solution
/*
const moveTen = str =>
  [...str]
    .map(char => {
      const charCodeMoved = char.charCodeAt() + 10
      return String.fromCharCode(charCodeMoved <= 122 ? charCodeMoved : 97 + (charCodeMoved - 123))
    })
    .join('')
*/

// Short Solution
const moveTen = s => s.replace(/./g, char => 'klmnopqrstuvwxyzabcdefghij'[char.charCodeAt() - 97])

// Function Export
module.exports = moveTen
