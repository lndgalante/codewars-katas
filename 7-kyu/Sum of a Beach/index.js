/*
  Title:
    Sum of a Beach

  Description:
    Beaches are filled with sand, water, fish, and sun.
    Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

  Examples:
    sumOfABeach("WAtErSlIde")                    ==>  1
    sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
    sumOfABeach("gOfIshsunesunFiSh")             ==>  4
    sumOfABeach("cItYTowNcARShoW")               ==>  0
    sumOfABeach("WAtErSlIde")                    ==>  1

  Kata Link:
    https://www.codewars.com/kata/sum-of-a-beach

  Discuss Link:
    https://www.codewars.com/kata/sum-of-a-beach/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-a-beach/solutions
*/

// Long Solution
const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/gi) || []).length

// Function Export
module.exports = sumOfABeach
