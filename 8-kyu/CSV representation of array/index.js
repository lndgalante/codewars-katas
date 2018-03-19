/*
  Title:
    CSV representation of array

  Description:
    Create a function that returns the CSV representation of a two-dimensional numeric array.

  Examples:
    input:
      [[ 0, 1, 2, 3, 4 ],
        [ 10,11,12,13,14 ],
        [ 20,21,22,23,24 ],
        [ 30,31,32,33,34 ]]

    output:
        '0,1,2,3,4\n'
        +'10,11,12,13,14\n'
        +'20,21,22,23,24\n'
        +'30,31,32,33,34'

  Kata Link:
    https://www.codewars.com/kata/csv-representation-of-array

  Discuss Link:
    https://www.codewars.com/kata/csv-representation-of-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/csv-representation-of-array/solutions
*/

// Long Solution
const toCsvText = array => array.join('\n')

// Function Export
module.exports = toCsvText
