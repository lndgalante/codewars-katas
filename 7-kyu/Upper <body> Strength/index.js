/*
  Title:
    Upper <body> Strength

  Description:
    Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
    He can do ten kata in an hour, but when he makes a mistake, he must do pushups.
    These pushups really tire poor Alex out, so every time he does them they take twice as long.
    His first set of redemption pushups takes 5 minutes.

    Create a function, alexMistakes, that takes two arguments:
       the number of kata he needs to complete,
      and the time in minutes he has to complete them.

    Your function should return how many mistakes Alex can afford to make.

  Kata Link:
    https://www.codewars.com/kata/571640812ad763313600132b

  Discuss Link:
    https://www.codewars.com/kata/571640812ad763313600132b/discuss

  Solutions Link:
    https://www.codewars.com/kata/571640812ad763313600132b/solutions
*/

// Long Solution
/*
function alexMistakes(numberOfKata, timeLimit) {
  let count = 0
  let mistakeTime = timeLimit - numberOfKata * 6

  while (mistakeTime >= 0) {
    mistakeTime -= 5 * 2 ** count
    count++
  }

  const result = Math.max(count - 1, 0)

  return result
}
*/

// Short Solution
const alexMistakes = (numberOfKata, timeLimit) => ~~Math.log2((timeLimit - numberOfKata * 6) / 5 + 1)

// Function Export
module.exports = alexMistakes
