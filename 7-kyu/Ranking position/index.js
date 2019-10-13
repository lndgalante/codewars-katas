/*
  Title:
    Ranking position

  Description:
    In some ranking people collects points. The challenge is sort by points and calulate position for every person.
    But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

  Examples:
    Input structure:
    [
      {
        name: "John",
        points: 100,
      },
      {
        name: "Bob",
        points: 130,
      },
      {
        name: "Mary",
        points: 120,
      },
      {
        name: "Kate",
        points: 120,
      },
    ]

    Output should be:
    [
      {
        name: "Bob",
        points: 130,
        position: 1,
      },
      {
        name: "Kate",
        points: 120,
        position: 2,
      },
      {
        name: "Mary",
        points: 120,
        position: 2,
      },
      {
        name: "John",
        points: 100,
        position: 4,
      },
    ]

  Kata Link:
    https://www.codewars.com/kata/ranking-position

  Discuss Link:
    https://www.codewars.com/kata/ranking-position/discuss

  Solutions Link:
    https://www.codewars.com/kata/ranking-position/solutions
*/

// Long Solution
function ranking(people) {
  return [...people]
    .sort((a, b) => (a.points === b.points ? a.name.localeCompare(b.name) : b.points - a.points))
    .map((person, _, array) => {
      const position = array.findIndex(({ points }) => person.points === points) + 1
      return { ...person, position }
    })
}

// Function Export
module.exports = ranking
