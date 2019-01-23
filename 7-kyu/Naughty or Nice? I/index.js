/*
  Title:
    Naughty or Nice?

  Description:
    It's almost Christmas! That means Santa's making his list, and checking it twice.
    Unfortunately, Santa's Javascript and CoffeeScript Elves accidentally mixed the Naughty and Nice list together!
    Santa needs your help to save Christmas!

    Save Christmas!
      Santa needs you to write two functions, getNiceNames and getNaughtyNames.
      Both of the functions accept an array of objects. getNiceNames returns an array containing only the names of the nice people, and getNaughtyNames returns an array containing only the names of the naughty people
      Return an empty array [] if the result from either of the functions contains no names.

      The objects in the passed in array will represent people. Each object contains two properties: name and wasNice.
      name - The name of the person
      wasNice - True if the person was nice this year, false if they were naughty

    Person Object Examples
      { name: 'Warrior reading this kata', wasNice: true }
      { name: 'xDranik', wasNice: false }

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/naughty-or-nice

  Discuss Link:
    https://www.codewars.com/kata/naughty-or-nice/discuss

  Solutions Link:
    https://www.codewars.com/kata/naughty-or-nice/solutions
*/

// Long Solution
const getNiceNames = people =>
  people.filter(({ wasNice }) => wasNice).map(({ name }) => name)

const getNaughtyNames = people =>
  people.filter(({ wasNice }) => !wasNice).map(({ name }) => name)

// Function Export
module.exports = { getNiceNames, getNaughtyNames }
