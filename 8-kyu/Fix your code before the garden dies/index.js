/*
  Title:
    Fix your code before the garden dies!

  Description:
    You have an award-winning garden and everyday the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

    Your task is to debug the code before your plants die!

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
/*
function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`
  } else {
    return 'Your plant has had more than enough water for today!'
  }
}
*/

// Short Solution
const rainAmount = mm =>
  mm < 40
    ? `You need to give your plant ${40 - mm}mm of water`
    : `Your plant has had more than enough water for today!`

// Function Export
module.exports = rainAmount
