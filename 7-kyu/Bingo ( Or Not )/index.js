/*
  Title:
    Bingo ( Or Not )

  Description:
    For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input.
    Duplicate numbers within the array are possible.
    Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc).

    Write a function where you will win the game if your numbers can spell "BINGO".
    They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

  Kata Link:
    https://www.codewars.com/kata/bingo-or-not

  Discuss Link:
    https://www.codewars.com/kata/bingo-or-not/discuss

  Solutions Link:
    https://www.codewars.com/kata/bingo-or-not/solutions
*/

// Long Solution
/*
const bingo = arr => {
  const bingoLetters = ['b', 'i', 'n', 'g', 'o']
  const letters = arr.map(number => String.fromCharCode(96 + number))
  const hasBingo = bingoLetters.every(char => letters.includes(char))

  return hasBingo ? 'WIN' : 'LOSE'
}
*/

// Short Solution
const bingo = array => ([2, 7, 9, 14, 15].every(bingoValue => array.includes(bingoValue)) ? 'WIN' : 'LOSE')

// Function Export
module.exports = bingo
