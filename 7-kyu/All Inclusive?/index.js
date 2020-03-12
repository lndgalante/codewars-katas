/*
  Title:
    All Inclusive?

  Description:
    Input:
      - a string strng
      - an array of strings arr

    Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
      - a boolean true if all rotations of strng are included in arr (C returns 1)
      - false otherwise (C returns 0)

  Examples:
    contain_all_rots(
      "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

    contain_all_rots(
      "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

  Notes:
    Though not correct in a mathematical sense
      - we will consider that there are no rotations of strng == ""
      - and for any array arr: contain_all_rots("", arr) --> true

    Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

  Kata Link:
    https://www.codewars.com/kata/all-inclusive

  Discuss Link:
    https://www.codewars.com/kata/all-inclusive/discuss

  Solutions Link:
    https://www.codewars.com/kata/all-inclusive/solutions
*/

// Long Solution
/*
const containAllRots = (strng, arr) => {
  if (!strng) return true

  const allRotations = strng
    .split('')
    .map((_, index) => `${strng.slice(index)}${strng.slice(0, index)}`)

  const allRotationsExists = allRotations.every(el => arr.includes(el))

  return allRotationsExists
}
*/

// Short Solution
const containAllRots = (strng, array) =>
  [...strng]
    .map((_, index) => `${strng.slice(index)}${strng.slice(0, index)}`)
    .every(element => array.includes(element))

// Function Export
module.exports = containAllRots
