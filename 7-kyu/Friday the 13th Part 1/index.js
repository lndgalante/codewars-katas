/*
  Title:
    Friday the 13th Part 1

  Description:
    It's Friday the 13th, and Jason is ready for his first killing spree!
    Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

    JavaScript:
    var counselors = [["Chad", 2], ["Tommy", 9]];
    var jason = 7;

    Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

    Happy Friday the 13th!

  Kata Link:
    https://www.codewars.com/kata/friday-the-13th-part-1

  Discuss Link:
    https://www.codewars.com/kata/friday-the-13th-part-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/friday-the-13th-part-1/solutions
*/

// Long Solution
const killcount = (counselors, jason) =>
  counselors.filter(([_, intelligence]) => jason > intelligence).map(([name]) => name)

// Function Export
module.exports = killcount
