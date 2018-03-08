/*
  Title:
    Character Frequency

  Description:
    Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

    Your function will be called char_freq/charFreq/CharFreq and you will get passed a string,
    you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string.
    You can assume you will be given valid input.

  Examples:
    charFreq("I like cats")
      // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}


  Kata Link:
    https://www.codewars.com/kata/character-frequency-2

  Discuss Link:
    https://www.codewars.com/kata/character-frequency-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/character-frequency-2/solutions
*/

// Long Solution
/* function charFreq(message) {
  const freq = {}
  message.split('').map(char => {
    freq[char] = freq.hasOwnProperty(char) ? freq[char] + 1 : 1
  })

  return freq
} */

// Short Solution
const charFreq = message =>
  message.split('').reduce((freq, char) => {
    freq[char] = freq[char] ? freq[char] + 1 : 1
    return freq
  }, {})

// Function Export
module.exports = charFreq
