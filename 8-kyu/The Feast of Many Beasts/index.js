/*
  Title:
    The Feast of Many Beasts

  Description:
    All of the animals are having a feast! Each animal is bringing one dish.
    There is just one rule: the dish must start and end with the same letters as the animal's name.
    For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

    Write a function that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

    Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces,
    but these will not appear at the beginning or end of the string. They will not contain numerals.

  Kata Link:
    https://www.codewars.com/kata/the-feast-of-many-beasts

  Discuss Link:
    https://www.codewars.com/kata/the-feast-of-many-beasts/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-feast-of-many-beasts/solutions
*/

// Long Solution
const feast = (beast, dish) =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]

// Function Export
module.exports = feast
