/*
  Title:
    How many animals are there?

  Description:
    From a sentence, deduce the total number of animals.

  Examples:
    "I see 3 zebras, 5 lions and 6 giraffes."
    The answer must be 14

    "Mom, 3 rhinoceros and 6 snakes come to us!"
    The answer must be 9

  Kata Link:
    https://www.codewars.com/kata/how-many-animals-are-there

  Discuss Link:
    https://www.codewars.com/kata/how-many-animals-are-there/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-animals-are-there/solutions
*/

// Long Solution
const countAnimals = sentence => (sentence.match(/\d+/g) || []).reduce((total, animals) => total + Number(animals), 0)

// Function Export
module.exports = countAnimals
