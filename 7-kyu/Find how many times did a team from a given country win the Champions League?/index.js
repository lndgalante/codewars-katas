/*
  Title:
    Find how many times did a team from a given country win the Champions League?

  Description:
    Create a function that takes two arguments:
    1) An array of objects which feature the season, the team and the country of the Champions League winner.
    2) Country (as a string, for example, 'Portugal')

    You function should then return the number which represents the number of times a team from a given country has won.
    Return 0 if there have been no wins.

  Examples:
    For example if the input array is as follows:
    http://i.imgur.com/61bIUDY.png

    countWins(winnerList1, 'Spain') => should return 2
    countWins(winnerList1, 'Portugal') => should return 1
    countWins(winnerList1, 'Sportland') => should return 0

  Kata Link:
    https://www.codewars.com/kata/find-how-many-times-did-a-team-from-a-given-country-win-the-champions-league

  Discuss Link:
    https://www.codewars.com/kata/find-how-many-times-did-a-team-from-a-given-country-win-the-champions-league/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-how-many-times-did-a-team-from-a-given-country-win-the-champions-league/solutions
*/

// Long Solution
/*
const countWins = (winnerList, countryToCompare) =>
  winnerList.reduce((total, { country }) => (country === countryToCompare ? total + 1 : total), 0)
*/

// Short Solution
const countWins = (winnerList, countryToCompare) =>
  winnerList.filter(({ country }) => country === countryToCompare).length

// Function Export
module.exports = countWins
