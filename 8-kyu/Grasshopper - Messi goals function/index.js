/*
  Title:
    Grasshopper - Messi goals function

  Description:
    Messi is a soccer player with goals in three leagues:
      - La Liga
      - Copa del Rey
      - Champions League

  Examples:
    goals(5,10,2) == 5+10+2 = 17

  Notes:
    Note: the parameter for this function will always be a valid number.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-messi-goals-function

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-messi-goals-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-messi-goals-function/solutions
*/

// Long Solution
const goals = (...allLeagueGoals) => allLeagueGoals.reduce((total, goals) => total + goals, 0)

// Function Export
module.exports = goals
