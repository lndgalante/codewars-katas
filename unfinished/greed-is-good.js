/* 
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

    A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

  Example:
    Throw       Score
    ---------   ------------------
    5 1 3 4 1   50 + 2 * 100 = 250
    1 1 1 3 1   1000 + 100 = 1100
    2 4 4 5 4   400 + 50 = 450

*/

const times = (dice, diceNumber) => ({
  number: diceNumber,
  times: dice.filter(number => number === diceNumber).length,
})

// Long solution
function score(dice) {
  const dicesData = []
  let score = 0

  for (var i = 1; i < 7; i++) {
    dicesData.push(times(dice, i))
  }

  dicesData.forEach(({ number, times }) => {
    switch (number) {
      case 1: {
        if (times === 0) {
          break
        } else if (times === 1) {
          score += 100
          break
        } else if (times === 2) {
          score += 200
          break
        } else if (times === 3) {
          score += 1000
          break
        } else if (times === 4) {
          score += 1100
          break
        } else if (times === 5) {
          score += 1200
          break
        }
      }

      case 2: {
        score += times === 3 ? 200 : 0
        break
      }

      case 3: {
        score += times === 3 ? 300 : 0
        break
      }

      case 4: {
        score += times === 3 ? 400 : 0
        break
      }

      case 5: {
        if (times === 0) {
          break
        } else if (times === 1) {
          score += 50
          break
        } else if (times === 2) {
          score += 100
          break
        } else if (times === 3) {
          score += 500
          break
        } else if (times === 4) {
          score += 550
          break
        } else if (times === 5) {
          score += 600
          break
        }
      }

      case 6: {
        score += times === 3 ? 600 : 0
        break
      }

      default:
        break
    }
  })

  return score
}

// Test to pass
console.log(score([2, 3, 4, 6, 2])) // => It should return 0

console.log(score([4, 4, 4, 3, 3])) // => It should return 400

console.log(score([2, 4, 4, 5, 4])) // => It should return 450
