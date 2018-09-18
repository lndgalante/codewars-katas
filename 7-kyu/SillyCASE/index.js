/*
  Title:
    SillyCASE

  Description:
    Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

    eg: foobar == fooBAR

    If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

    sillycase("brian")
    //         --^-- midpoint
    //         bri    first half (lower-cased)
    //            AN second half (upper-cased)

  Kata Link:
    https://www.codewars.com/kata/sillycase

  Discuss Link:
    https://www.codewars.com/kata/sillycase/discuss

  Solutions Link:
    https://www.codewars.com/kata/sillycase/solutions
*/

// Long Solution
/*
const sillycase = silly => {
  const half = Math.ceil(silly.length / 2)
  const firstHalf = silly.substr(0, half).toLowerCase()
  const secondHalf = silly.substr(half).toUpperCase()

  return `${firstHalf}${secondHalf}`
}
*/

// Short Solution
const sillycase = silly =>
  silly
    .toLowerCase()
    .split('')
    .map((char, index) => {
      const isBelowHalf = index < silly.length / 2
      return isBelowHalf ? char : char.toUpperCase()
    })
    .join('')

// Function Export
module.exports = sillycase
