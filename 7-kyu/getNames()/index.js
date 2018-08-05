/*
  Title:
    getNames()

  Description:
    The following code is not giving the expected results.
    Can you figure out what the issue is?

  Examples:
    The following is an example of data that would be passed in to the function.

    var data = [
      {name: 'Joe', age: 20},
      {name: 'Bill', age: 30},
      {name: 'Kate', age: 23}
    ]

    getNames(data) // should return ['Joe', 'Bill', 'Kate']

  Kata Link:
    https://www.codewars.com/kata/getnames

  Discuss Link:
    https://www.codewars.com/kata/getnames/discuss

  Solutions Link:
    https://www.codewars.com/kata/getnames/solutions
*/

// Long Solution
const getNames = data => data.map(({ name }) => name)

// Function Export
module.exports = getNames
