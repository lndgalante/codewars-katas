/*
  Title:
    Reducing Problems - Bug Fixing #8

  Description:
    Oh no! Timmy's reduce is causing problems,
    Timmy's goal is to calculate the two teams scores and return the winner
    but timmy has gotten confused and sometimes teams don't enter their scores,
    total the scores out of 3! Help timmy fix his program! Return true if team 1 wins or false if team 2 wins!

  Kata Link:
    https://www.codewars.com/kata/reducing-problems-bug-fixing-number-8

  Discuss Link:
    https://www.codewars.com/kata/reducing-problems-bug-fixing-number-8/discuss

  Solutions Link:
    https://www.codewars.com/kata/reducing-problems-bug-fixing-number-8/solutions
*/

// Long Solution
const totalScore = scores => scores.reduce((total, score) => total + score, 0)

const calculateTotal = (team1, team2) => totalScore(team1) > totalScore(team2)

// Function Export
module.exports = calculateTotal
