/*
  Title:
    Lost Cities Score Calculator

  Description:
    The card game Lost Cities contains two types of cards: Numbered cards and wagers cards.
    To calculate one’s score, a player totals all the number cards they played and any wager cards played are used as score multipliers.

    1 wager card = score * 2
    2 wager cards = score * 3
    3 wager cards = score * 4 Additionally, if the player plays any cards at all (numbered or wager), there is a one-time 20 point penalty, meaning the player's score begins at -20.

    Wager points should be multiplied after all other calculations.

    Write a function where, given an array of numbers (the numbered cards played) and a second parameter (# of wager cards played), will calculate a player’s score.

  Examples:
    calculateScore([2, 4, 6, 7, 8], 2);
    Expected output: 21

  Notes:
    If both parameters into the function are empty, this means no cards were played.

  Kata Link:
    https://www.codewars.com/kata/lost-cities-score-calculator

  Discuss Link:
    https://www.codewars.com/kata/lost-cities-score-calculator/discuss

  Solutions Link:
    https://www.codewars.com/kata/lost-cities-score-calculator/solutions
*/

// Long Solution
const calculateScore = (cardsArr, wager) => {
  if (cardsArr.length === 0 && wager === 0) return 0
  return cardsArr.reduce((acc, num) => acc + num, -20) * (wager + 1)
}

// Function Export
module.exports = calculateScore
