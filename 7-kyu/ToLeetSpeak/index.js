/*
  Title:
    ToLeetSpeak

  Description:
    Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

    More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

    Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

  Examples:
    toLeetSpeak("LEET") returns "1337"

  Notes:
    In this kata we use a simple LeetSpeak dialect. Use the alphabet down below.

  Kata Link:
    https://www.codewars.com/kata/toleetspeak

  Discuss Link:
    https://www.codewars.com/kata/toleetspeak/discuss

  Solutions Link:
    https://www.codewars.com/kata/toleetspeak/solutions
*/

// Leet Alphabet
const alphabet = {
  A: '@',
  B: '8',
  C: '(',
  D: 'D',
  E: '3',
  F: 'F',
  G: '6',
  H: '#',
  I: '!',
  J: 'J',
  K: 'K',
  L: '1',
  M: 'M',
  N: 'N',
  O: '0',
  P: 'P',
  Q: 'Q',
  R: 'R',
  S: '$',
  T: '7',
  U: 'U',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  Z: '2',
}

// Long Solution

/*
const toLeetSpeak = str =>
  str
    .split('')
    .map(char => alphabet[char] || char)
    .join('') */

// Short Solution
const toLeetSpeak = s => s.replace(/[A-Z]/g, char => alphabet[char])

// Function Export
module.exports = toLeetSpeak
