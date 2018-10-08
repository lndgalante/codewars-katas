/*
  Title:
    Looking for a benefactor

  Description:
    The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he made a mistake. Could you help him?

    if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

    The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

    Should the last donation be a non positive number (<= 0) John wants us to throw an error

    (return Nothing in Haskell, return None in F# and Ocaml, return -1 in C, Fortran, Nim, echo ERRORin Shell)

    so that he clearly sees that his expectations are not great enough.

  Notes:
    - all donations and navg are numbers (integers or floats depending on the language), arr can be empty.
    - See examples below and "Test Samples" to see which error is to be thrown.
        new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
        new_avg([14, 30, 5, 7, 9, 11, 15], 2)
        should raise an error (ValueError or invalid_argument or DomainError)
        or return `-1` or ERROR depending on the language

  Kata Link:
    https://www.codewars.com/kata/looking-for-a-benefactor

  Discuss Link:
    https://www.codewars.com/kata/looking-for-a-benefactor/discuss

  Solutions Link:
    https://www.codewars.com/kata/looking-for-a-benefactor/solutions
*/

// Long Solution
const newAvg = (arr, newavg) => {
  const totalDonations = arr.reduce((total, value) => total + value, 0)
  const result = newavg * (arr.length + 1) - totalDonations

  if (result < 0) throw new RangeError('Error')
  return Math.ceil(result)
}

// Function Export
module.exports = newAvg
