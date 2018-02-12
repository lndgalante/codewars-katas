/*
  Title:
    How good are you really?

  Description:
    There was a test in your class and you passed it. Congratulations!
    But you're an ambitious person. You want to know if you're better than the average student in your class.
    You got an array with your colleges' points. Now calculate the average to your points!

    Return True if you're better, else False!

  Notes:
    Your points are not included in the array of your classes points.
    For calculating the average point you may add your point to the given array!

  Kata Link:
    https://www.codewars.com/kata/how-good-are-you-really

  Discuss Link:
    https://www.codewars.com/kata/how-good-are-you-really/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-good-are-you-really/solutions
*/

// Long Solution
/*
function betterThanAverage(classPoints, yourPoints) {
  const classAverage =
    classPoints.reduce((total, value) => total + value, 0) / classPoints.length

  return yourPoints > classAverage
}
*/

// Short Solution
const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints >
  classPoints.reduce((total, value) => total + value, 0) / classPoints.length

// Function Export
module.exports = betterThanAverage
