/*
  Title:
    Get Planet Name By ID

  Description:
    The function is not returning the correct values.
    Can you figure out why?

  Examples:
    getPlanetName(3); // should return 'Earth'


  Kata Link:
    https://www.codewars.com/kata/get-planet-name-by-id

  Discuss Link:
    https://www.codewars.com/kata/get-planet-name-by-id/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-planet-name-by-id/solutions
*/

// Long Solution
function getPlanetName(id) {
  switch (id) {
    case 1:
      return 'Mercury'
    case 2:
      return 'Venus'
    case 3:
      return 'Earth'
    case 4:
      return 'Mars'
    case 5:
      return 'Jupiter'
    case 6:
      return 'Saturn'
    case 7:
      return 'Uranus'
    case 8:
      return 'Neptune'
    default:
      return 'No planet'
  }
}

// Function Export
module.exports = getPlanetName
