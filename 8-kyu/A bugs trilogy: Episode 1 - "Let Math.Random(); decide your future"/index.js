/*
  Title:
    A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

  Description:
    Our friend Pac has finally decided to pursue a career in the coding industry.
    He is a newbie, he needs to learn properly.
    Therefore, Pac wants to apply for the worldwide famous -and very demanding-
    'C0d3r 1ns1d3' Academy for beginners.
    In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
    He has been sent an email from the Academy with the following instructions,

    Dear Pac,
    This is the first exercise. Find out what's wrong and fix the code.
    You have 15 minutes to send a solution.
    Good Luck.
    This code is a mess! Would you help Pac to fix the code in time?

  Kata Link:
    https://www.codewars.com/kata/a-bugs-trilogy-episode-1-let-math-dot-random-decide-your-future

  Discuss Link:
    https://www.codewars.com/kata/a-bugs-trilogy-episode-1-let-math-dot-random-decide-your-future/discuss

  Solutions Link:
    https://www.codewars.com/kata/a-bugs-trilogy-episode-1-let-math-dot-random-decide-your-future/solutions
*/

// Long Solution
/*
const yourFutureCareer = (career = Math.random()) => {
  if (career <= 0.32) return 'FrontEnd Developer'
  else if (career <= 0.65) return 'BackEnd Developer'
  return 'Full-Stack Developer'
}
*/

// Short Solution
const yourFutureCareer = (career = Math.random()) =>
  `${
    career <= 0.32 ? 'FrontEnd' : career <= 0.65 ? 'BackEnd' : 'Full-Stack'
  } Developer`

// Function Export
module.exports = yourFutureCareer
