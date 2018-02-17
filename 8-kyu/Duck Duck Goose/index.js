/*
  Title:
    Duck Duck Goose

  Description:
    The objective of 'Duck, duck, goose' is to walk in a circle, tapping on each player's head until one is finally chosen.
    Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player.

  Examples:
    duck_duck_goose([a, b, c, d], 1) should return a.name
    duck_duck_goose([a, b, c, d], 5) should return a.name
    duck_duck_goose([a, b, c, d], 4) should return d.name

  Kata Link:
    https://www.codewars.com/kata/duck-duck-goose

  Discuss Link:
    https://www.codewars.com/kata/duck-duck-goose/discuss

  Solutions Link:
    https://www.codewars.com/kata/duck-duck-goose/solutions
*/

// Long Solution
/*
function duckDuckGoose(players, goose) {
  while (players.length < goose) {
    goose = goose - players.length
  }

  return players[goose - 1].name
}
*/

// Short Solution
const duckDuckGoose = (players, goose) =>
  players[(goose - 1) % players.length].name

// Function Export
module.exports = duckDuckGoose
