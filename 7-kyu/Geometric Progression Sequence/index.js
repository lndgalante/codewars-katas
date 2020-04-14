/*
  Title:
    Geometric Progression Sequence

  Description:
    In your class, you have started lessons about geometric progression.
    Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
    Result should be separated by comma and space.

  Examples:
    geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'

  Notes:
    More info: https://en.wikipedia.org/wiki/Geometric_progression

  Kata Link:
    https://www.codewars.com/kata/55caef80d691f65cb6000040

  Discuss Link:
    https://www.codewars.com/kata/55caef80d691f65cb6000040/discuss

  Solutions Link:
    https://www.codewars.com/kata/55caef80d691f65cb6000040/solutions
*/

// Long Solution
/*
const geometricSequenceElements = (a, r, n) => {
  const result = [a]

  for (let index = 0; index < n - 1; index++) {
    const newNumber = result[index] * r
    result.push(newNumber)
  }

  return result.join(', ')
}
*/

// Short Solution
const geometricSequenceElements = (a, r, n) => [...new Array(n)].map((_, index) => a * r ** index).join(', ')

// Function Export
module.exports = geometricSequenceElements
