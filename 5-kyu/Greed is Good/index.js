/*
  Title:
    Greed is Good

  Description:
    Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

    Three 1's => 1000 points
    Three 6's =>  600 points
    Three 5's =>  500 points
    Three 4's =>  400 points
    Three 3's =>  300 points
    Three 2's =>  200 points
    One   1   =>  100 points
    One   5   =>   50 point
    A single die can only be counted once in each roll.
    For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

    Example scoring

    Throw       Score
    ---------   ------------------
    5 1 3 4 1   50 + 2 * 100 = 250
    1 1 1 3 1   1000 + 100 = 1100
    2 4 4 5 4   400 + 50 = 450

  Kata Link:
    https://www.codewars.com/kata/greed-is-good

  Discuss Link:
    https://www.codewars.com/kata/greed-is-good/discuss

  Solutions Link:
    https://www.codewars.com/kata/greed-is-good/solutions
*/

// Long Solution
function score(dice) {
  const result = [
    {
      value: 1,
      repetitions: 0,
      singlePoints: 100,
      triplePoints: 1000,
    },
    {
      value: 2,
      repetitions: 0,
      singlePoints: 0,
      triplePoints: 200,
    },
    {
      value: 3,
      repetitions: 0,
      singlePoints: 0,
      triplePoints: 300,
    },
    {
      value: 4,
      repetitions: 0,
      singlePoints: 0,
      triplePoints: 400,
    },
    {
      value: 5,
      repetitions: 0,
      singlePoints: 50,
      triplePoints: 500,
    },
    {
      value: 6,
      repetitions: 0,
      singlePoints: 0,
      triplePoints: 600,
    },
  ]

  dice.forEach(die => {
    result[die - 1].repetitions += 1
  })

  const totalPoints = result
    .map(die => {
      if (die.repetitions > 3)
        return die.triplePoints + die.singlePoints * die.repetitions

      if (die.repetitions === 3) return die.triplePoints

      return die.singlePoints * die.repetitions
    })
    .reduce((total, value) => total + value, 0)

  return totalPoints
}

// Function Export
module.exports = score
