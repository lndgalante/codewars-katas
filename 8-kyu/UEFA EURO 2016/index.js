/*
  Title:
    UEFA EURO 2016

  Description:
    Finish the uefaEuro2016() function so it return string just like in the examples below:

  Examples:
    uefaEuro2016(['Germany', 'Ukraine'],[2, 0])
      // "At match Germany - Ukraine, Germany won!"

    uefaEuro2016(['Belgium', 'Italy'],[0, 2])
      // "At match Belgium - Italy, Italy won!"

    uefaEuro2016(['Portugal', 'Iceland'],[1, 1])
      // "At match Portugal - Iceland, teams played draw."

  Kata Link:
    https://www.codewars.com/kata/uefa-euro-2016

  Discuss Link:
    https://www.codewars.com/kata/uefa-euro-2016/discuss

  Solutions Link:
    https://www.codewars.com/kata/uefa-euro-2016/solutions
*/

// Long Solution
/*
const uefaEuro2016 = (teams, scores) => {
  const table = teams
    .map((team, index) => ({ team, goals: scores[index] }))
    .sort((a, b) => b.goals - a.goals)

  if (table[0].goals === table[1].goals)
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`

  return `At match ${teams[0]} - ${teams[1]}, ${table[0].team} won!`
}
*/

// Short Solution
const uefaEuro2016 = (teams, scores) =>
  scores[0] === scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    : scores[0] > scores[1]
      ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
      : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`

// Function Export
module.exports = uefaEuro2016
