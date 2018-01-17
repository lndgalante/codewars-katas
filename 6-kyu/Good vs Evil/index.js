/* eslint no-else-return: 0 */

/*
  Title:
    Good vs Evil

  Description:
    Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil.
    Different races will certainly be involved. Each race has a certain worth when battling against others.
    On the side of good we have the following races, with their associated worth:

    Hobbits: 1
    Men: 2
    Elves: 3
    Dwarves: 3
    Eagles: 4
    Wizards: 10
    On the side of evil we have:

    Orcs: 1
    Men: 2
    Wargs: 2
    Goblins: 2
    Uruk Hai: 3
    Trolls: 5
    Wizards: 10
    Although weather, location, supplies and valor play a part in any battle,
    if you add up the worth of the side of good and compare it with the worth of the side of evil,
    the side with the larger worth will tend to win.

    Thus, given the count of each of the races on the side of good,
    followed by the count of each of the races on the side of evil, determine which side wins.

    Input:
    The function will be given two parameters. Each parameter will be a string separated by a single space.
     Each string will contain the count of each race on the side of good and evil.

    The first parameter will contain the count of each race on the side of good in the following order:

    Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
    The second parameter will contain the count of each race on the side of evil in the following order:

    Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
    All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

  Kata Link:
    https://www.codewars.com/kata/good-vs-evil

  Discuss Link:
    https://www.codewars.com/kata/good-vs-evil/discuss

  Solutions Link:
    https://www.codewars.com/kata/good-vs-evil/solutions
*/

// Long Solution
const goodWorth = [
  1, // Hobbits
  2, // Men
  3, // Elves
  3, // Dwarves
  4, // Eagles
  10, // Wizards
]

const evilWorth = [
  1, // Orcs
  2, // Men
  2, // Wargs
  2, // Goblins
  3, // Uruk Hai
  5, // Trolls
  10, // Wizards
]

const calculateWorth = (points, force) =>
  points
    .split(' ')
    .reduce(
      (total, value, index) =>
        force === 'good'
          ? Number(total) + goodWorth[index] * Number(value)
          : Number(total) + evilWorth[index] * Number(value),
      0
    )

function goodVsEvil(good, evil) {
  const goodTotalWorth = calculateWorth(good, 'good')
  const evilTotalWorth = calculateWorth(evil, 'evil')

  if (evilTotalWorth > goodTotalWorth)
    return 'Battle Result: Evil eradicates all trace of Good'
  else if (goodTotalWorth > evilTotalWorth)
    return 'Battle Result: Good triumphs over Evil'
  else return 'Battle Result: No victor on this battle field'
}

// Function Export
module.exports = goodVsEvil
