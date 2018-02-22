/*
  Title:
    Find the position!

  Description:
    When provided with a letter, return its position in the alphabet.

    Input :: "a"
    Ouput :: "Position of alphabet: 1"

  Kata Link:
    https://www.codewars.com/kata/find-the-position

  Discuss Link:
    https://www.codewars.com/kata/find-the-position/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-position/solutions
*/

// Long Solution
/*
const alphabet = () => {
  const a = 97
  const charArray = {}

  for (let i = 0; i < 26; i++) {
    charArray[String.fromCharCode(a + i)] = i + 1
  }

  return charArray
}

const position = letter => `Position of alphabet: ${alphabet()[letter]}`
*/

// Short Solution
const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`

// Function Export
module.exports = position
