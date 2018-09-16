/*
  Title:
    Katastrophe!

  Description:
    You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.

    A building will fall if the magnitude of the earthquake is greater than the strength of the building.

    An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave,
    and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves.
    A shockwave is equal to the sum of the values of its tremors.

    Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735

    A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year.
    For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay

    Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.

  Kata Link:
    https://www.codewars.com/kata/katastrophe

  Discuss Link:
    https://www.codewars.com/kata/katastrophe/discuss

  Solutions Link:
    https://www.codewars.com/kata/katastrophe/solutions
*/

// Long Solution
const strongEnough = (earthquake, age) => {
  const decayRate = 0.01
  const buildingBaseStrength = 1000

  const buildingStrength = buildingBaseStrength * (1 - decayRate) ** age
  const earthquakeStrength = earthquake.reduce(
    (total, shockwave) =>
      total * shockwave.reduce((tremor, value) => tremor + value),
    1
  )

  return buildingStrength > earthquakeStrength
    ? 'Safe!'
    : 'Needs Reinforcement!'
}

// Short Solution
/*
const strongEnough = (earthquake, age) =>
  1000 * 0.99 ** age >
  earthquake.reduce(
    (total, shockwave) =>
      total * shockwave.reduce((tremor, value) => tremor + value),
    1
  )
    ? 'Safe!'
    : 'Needs Reinforcement!'
*/

// Function Export
module.exports = strongEnough
