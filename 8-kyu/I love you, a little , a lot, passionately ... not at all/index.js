/*
  Title:
    I love you, a little , a lot, passionately ... not at all

  Description:
    Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    * I love you
    * a little
    * a lot
    * passionately
    * madly
    * not at all
    * When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

    Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

  Kata Link:
    https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all

  Discuss Link:
    https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/discuss

  Solutions Link:
    https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/solutions
*/

// Long Solution
/* function howMuchILoveYou(nbPetals) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]

  const phrasesLimit = phrases.length - 1
  const takedOut = []
  let j = 0

  for (let i = 0; i < nbPetals; i++) {
    takedOut.push(phrases[j])

    if (j >= phrasesLimit) {
      j = 0
      continue
    }

    j++
  }

  const lastPetal = takedOut[takedOut.length - 1]
  return lastPetal
}
*/

// Short Solution
const phrases = [
  'not at all',
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
]

const howMuchILoveYou = n => phrases[n % 6]

// Function Export
module.exports = howMuchILoveYou
