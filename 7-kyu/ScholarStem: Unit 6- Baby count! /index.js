/*
  Title:
    ScholarStem: Unit 6- Baby count!

  Description:
    A local birthing center is interested in names!
    They have arrays of all the baby names they see each year, but the lists are sooo long!

    They don’t know how to calculate how many times one name is used.
    Given an array of names and a specific name string, return the number of times that specific name appears in the array.

  Examples:
    countName( ["Tom","Bob","Harry","Bob"] , "Bob") //should return 2, since "Bob" shows up 2 times in the array

  Kata Link:
    https://www.codewars.com/kata/5702f077e55d30a7af000115

  Discuss Link:
    https://www.codewars.com/kata/5702f077e55d30a7af000115/discuss

  Solutions Link:
    https://www.codewars.com/kata/5702f077e55d30a7af000115/solutions
*/

// Long Solution
/*
const countName = (array, nameToFind) => array.reduce((acc, name) => (name === nameToFind ? acc + 1 : acc), 0)
*/

// Short Solution
const countName = (array, nameToFind) => array.filter((name) => nameToFind === name).length

// Function Export
module.exports = countName
