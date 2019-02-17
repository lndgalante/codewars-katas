/*
  Title:
    Rock Off!

  Description:
    Alice and Bob have participated to a Rock Off with their bands. A jury of true metalheads rates the two challenges, awarding points to the bands on a scale from 1 to 50 for three categories: Song Heaviness, Originality, and Members' outfits.
    For each one of these 3 categories they are going to be awarded one point, should they get a better judgement from the jury. No point is awarded in case of an equal vote.
    You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's. Your task is to find their total score by comparing them in a single line.
    Example:
    Alice's band plays a Nirvana inspired grunge and has been rated
    20 for Heaviness,
    32 for Originality and only
    18 for Outfits.

    Bob listens to Slayer and has gotten a good
    48 for Heaviness,
    25 for Originality and a rather honest
    40 for Outfits.

    The total score should be followed by a colon : and by one of the following quotes:
    if Alice's band wins: Alice made "Kurt" proud!

    if Bob's band wins: Bob made "Jeff" proud!
    if they end up with a draw: that looks like a "draw"! Rock on!

    The solution to the example above should therefore appear like
    '1, 2: Bob made "Jeff" proud!'.

  Kata Link:
    https://www.codewars.com/kata/rock-off

  Discuss Link:
    https://www.codewars.com/kata/rock-off/discuss

  Solutions Link:
    https://www.codewars.com/kata/rock-off/solutions
*/

// Long Solution
const solve = (a, b) => {
  const alicePoints = a.reduce((total, points, index) => (points > b[index] ? total + 1 : total), 0)
  const bobPoints = b.reduce((total, points, index) => (points > a[index] ? total + 1 : total), 0)

  if (alicePoints > bobPoints) return `${alicePoints}, ${bobPoints}: Alice made "Kurt" proud!`
  if (bobPoints > alicePoints) return `${alicePoints}, ${bobPoints}: Bob made "Jeff" proud!`

  return `${alicePoints}, ${bobPoints}: that looks like a "draw"! Rock on!`
}

// Function Export
module.exports = solve
