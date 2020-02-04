/*
  Title:
    YaCG: #1 Yet another Card Kata !

  Description:
    *" Under the frozen stars of himalayan nights, yak-boys and yak-girls are used to share chunks of chhurpi and hot cups of  ja-srub-ma to the sound of sgra-snyan near a g.yag dung fire.*


    After a while they also like to play card games. "

    One of these games is called "YaCg" (yEt AnOtHeR cArD Game).

    Rules
      Yacg is a trick-taking game ie a game in which series of rounds, called "tricks",
      are played. At the end of a "trick" the winner of the trick "takes" it (and becomes the "trick-taker").

      A standard 52-card pack is used. The cards in each suit rank from highest to lowest: A K Q J 10 9 8 7 6 5 4 3 2.

      The trick is won by the highest card.

    Task
      Code a function winnerOfTrick( cards, players ) which return the name of the "trick-taker" ie the one who played the highest ranked card.

    Input
      cards is an array of card-codes of the form "RS" where :

      "R" is the rank of the card ( one of A, K, Q, J, T (for 10), 9, 8, 7, 6, 5, 4, 3 or 2 )
      "S" is the *suit * of the card (one of "H" (Hearts), "C" (Clubs), "D" (Diamonds) and "S" (Spades))

      eg : [ "2H", "3H", "4C", "KD", "AS" ]

      players is an array of yagc-fanatic yak-boys/girls.
      eg : [ "Algichh", "Bdobd", "Charmolg", "Dbang", "Erming" ]

      If players length is longer than cards length just ignore additional players.

    Output:
      a string of the form "Bdobd wins" or "Tie! (Dbang,Erming)" if a tie occurs.

  Examples:
    winnerOfTrick( ["2D", "4D", "3S"],  ["GgbA", "mZoIs", "S'Lg"] ) // -> "mZoIs wins" ("4D" is the highest)
    winnerOfTrick( ["4D", "2H", "4S"],  ["GgbA", "mZoIs", "S'Lg"] ) // -> "Tie! (GgbA,S'Lg)" ("4D" and "4S" are the highest)
    winnerOfTrick( ["2D", "KH", "QH"],  ["mZoIs", "GgbA", "S'Lg"] ) // -> "GgbA wins" ("KH" is the highest)

  Kata Link:
    https://www.codewars.com/kata/59767719c74de3b2d100002c

  Discuss Link:
    https://www.codewars.com/kata/59767719c74de3b2d100002c/discuss

  Solutions Link:
    https://www.codewars.com/kata/59767719c74de3b2d100002c/solutions
*/

// Long Solution
const RANKS_POINTS = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  T: 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
}

const SUITS_POINTS = {
  H: 1,
  C: 1,
  D: 1,
  S: 1,
}

function winnerOfTrick(cards, players) {
  const points = cards.map((card) => {
    const [rank, suit] = card.split('')
    return RANKS_POINTS[rank] + SUITS_POINTS[suit]
  })

  const highestPoint = Math.max(...points)
  const highestPointIndex = points.indexOf(highestPoint)
  const sameHighestPoints = points.map((point) => (point === highestPoint ? point : null))

  const winnerPlayer = players[highestPointIndex]
  const isTie = sameHighestPoints.filter(Boolean).length !== 1
  const tieWinners = players.filter((player, index) => sameHighestPoints[index]).join(',')

  return isTie ? `Tie! (${tieWinners})` : `${winnerPlayer} wins`
}

// Function Export
module.exports = winnerOfTrick
