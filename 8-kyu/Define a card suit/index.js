/*
  Title:
    Define a card suit

  Description:
    You get any card as an argument. Your task is to return a suit of this card.

    Our deck (is preloaded):

    deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
            '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
            '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
            '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
    ('3♣') -> return 'clubs'
    ('3♦') -> return 'diamonds'
    ('3♥') -> return 'hearts'
    ('3♠') -> return 'spades'

  Kata Link:
    https://www.codewars.com/kata/define-a-card-suit

  Discuss Link:
    https://www.codewars.com/kata/define-a-card-suit/discuss

  Solutions Link:
    https://www.codewars.com/kata/define-a-card-suit/solutions
*/

// Long Solution
const defineSuit = card => {
  if (card.includes('♣')) return 'clubs'
  if (card.includes('♦')) return 'diamonds'
  if (card.includes('♥')) return 'hearts'
  if (card.includes('♠')) return 'spades'
}

// Function Export
module.exports = defineSuit
