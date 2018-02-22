/*
  Title:
    Grasshopper - Messi Goals

  Description:
    Use variables to find the sum of the goals Messi scored in 3 games

    Messi goal scoring statistics:
      Competition	        Goals
      La Liga	            43
      Champions League	  10
      Copa del Rey	      5

    Create three variables and store the appropriate values using the table above:
      laLigaGoals
      championsLeagueGoals
      copaDelReyGoals
    Create a fourth variable named totalGoals. totalGoals should store the sum of all of Messi's goals for this year.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-messi-goals

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-messi-goals/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-messi-goals/solutions
*/

// Long Solution
const laLigaGoals = 43
const championsLeagueGoals = 10
const copaDelReyGoals = 5

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// Function Export
module.exports = totalGoals
