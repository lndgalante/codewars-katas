/*
  Title:
    Simple Fun #261: Whose Move

  Description:
    Two players - "black" and "white" are playing a game.
    The game consists of several rounds.
    If a player wins in a round, he is to move again during the next round.
    If a player loses a round, it's the other player who moves on the next round.
    Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

    Input/Output
    [input] string lastPlayer/$last_player

    "black" or "white" - whose move it was during the previous round.

    [input] boolean win/$win

    true if the player who made a move during the previous round won, false otherwise.

    [output] a string

    Return "white" if white is to move on the next round, and "black" otherwise.

  Examples:
    For lastPlayer = "black" and win = false, the output should be "white".

    For lastPlayer = "white" and win = true, the output should be "white".

  Kata Link:
    https://www.codewars.com/kata/simple-fun-number-261-whose-move

  Discuss Link:
    https://www.codewars.com/kata/simple-fun-number-261-whose-move/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-fun-number-261-whose-move/solutions
*/

// Long Solution
/*
const whoseMove = (lastPlayer, win) => {
  if (win) return lastPlayer
  return lastPlayer === 'black' ? 'white' : 'black'
}
*/

// Short Solution
const whoseMove = (lastPlayer, win) =>
  win ? lastPlayer : lastPlayer === 'black' ? 'white' : 'black'

// Function Export
module.exports = whoseMove
