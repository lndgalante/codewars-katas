/*
  Title:
    New season, new league

  Description:
    The new football league season is coming and the Football Association need some help resetting the league standings.
    Normally the initial league standing is done in alphabetical order (from A to Z) but this year the FA have decided to freshen it up.

    It has been decided that team who finished first last season will begin the next season in first place.
    Regardless of what letter their club begins with. e.g. if Manchester City were in first place last year, they will begin the season in position one. All other teams should be in alphabetical order.

    The teams will be fed in as an object ({}). The key will be will be their position from last season and the value is the club's name e.g. Arsenal.

    The output should be an object ({}) with the key as the club's starting position for the new season and the value should be club's name e.g. Arsenal.


  Examples:
    If in the previous season the standings were:
      1:'Leeds United'
      2:'Liverpool'
      3:'Manchester City'
      4:'Coventry'
      5:'Arsenal'

    Then the new season standings should
      1:'Leeds United' (first last season)
      2:'Arsenal' (alphabetical)
      3:'Coventry' (alphabetical)
      4:'Liverpool' (alphabetical)
      5:'Manchester City' (alphabetical)

  Notes:

  Kata Link:
    https://www.codewars.com/kata/58de08d376f875dbb40000f1

  Discuss Link:
    https://www.codewars.com/kata/58de08d376f875dbb40000f1/discuss

  Solutions Link:
    https://www.codewars.com/kata/58de08d376f875dbb40000f1/solutions
*/

// Long Solution
/*
function premierLeagueStandings(teamStandings) {
  const { 1: firstPlace, ...otherPlaces } = teamStandings

  const otherPlacesSortedAlphabetically = Object.entries(otherPlaces)
    .reduce((accumulator, [_place, team]) => [...accumulator, team], [])
    .sort((teamA, teamB) => teamA.localeCompare(teamB))
    .map((team, index) => [index + 2, team])

  return { 1: firstPlace, ...Object.fromEntries(otherPlacesSortedAlphabetically) }
}
*/

// Short Solution
function premierLeagueStandings(teamStandings) {
  const { 1: firstPlace } = teamStandings

  const otherPlaces = Object.values(teamStandings)
    .sort((teamA, teamB) => teamA.localeCompare(teamB))
    .filter((team) => team !== firstPlace)

  return [firstPlace, ...otherPlaces].reduce((accumulator, team, index) => ({ ...accumulator, [index + 1]: team }), {})
}

// Function Export
module.exports = premierLeagueStandings
