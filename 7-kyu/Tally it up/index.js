/*
  Title:
    Tally it up

  Description:
    I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals.
    Write a function that translates the numeric score into tally marks.

    My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively.
    I want a space and line break (<br>) after each completed tally (5).

    Assume that the score you receive will be an integer.
    This function should return an HTML string that I can insert into my website that represents the correct score.

  Kata Link:
    https://www.codewars.com/kata/5630d1747935943168000013

  Discuss Link:
    https://www.codewars.com/kata/5630d1747935943168000013/discuss

  Solutions Link:
    https://www.codewars.com/kata/5630d1747935943168000013/solutions
*/

// Long Solution
/*
const scoreToTally = (score) => {
  const array = []

  while (score >= 5) {
    array.push('e <br>')
    score -= 5
  }

  while (score >= 4) {
    array.push('d')
    score -= 4
  }

  while (score >= 3) {
    array.push('c')
    score -= 3
  }

  while (score >= 2) {
    array.push('b')
    score -= 2
  }

  while (score >= 1) {
    array.push('a')
    score -= 1
  }

  return array.join('')
}
*/

// Short Solution
const scoreToTally = (score) => 'e <br>'.repeat((score / 5) | 0) + ['', 'a', 'b', 'c', 'd'][score % 5]

// Function Export
module.exports = scoreToTally
