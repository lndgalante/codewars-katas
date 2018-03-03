/*
  Title:
    Finish Guess the Number Game

  Description:
    Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

    If the user tries to guess WRONG more than the limit the function should throw an error
    If the user guess wrong it should lose a life and return false (if you guess correctly you shouldn't remove a life)
    If the user guess right it should return true
    Can you finish the game so all the rules are met?

  Kata Link:
    https://www.codewars.com/kata/finish-guess-the-number-game

  Discuss Link:
    https://www.codewars.com/kata/finish-guess-the-number-game/discuss

  Solutions Link:
    https://www.codewars.com/kata/finish-guess-the-number-game/solutions
*/

// Long Solution
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }

  guess(n) {
    if (!this.lives) throw new Error('You have no more life')
    if (n === this.number) return true

    this.lives--
    return false
  }
}

// Function Export
module.exports = Guesser
