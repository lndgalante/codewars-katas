/*
  Title:
    Most valuable character

  Description:
    In this Kata, you will be given a string and your task is to return the most valuable character.
    The value of a character is the difference between the index of its last occurrence and the index of its first occurrence.
    Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

  Examples:
    solve('a') = 'a'
    solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
    solve("axyzxyz") = 'x'

  Notes:
    All inputs will be lower case.

  Kata Link:
    https://www.codewars.com/kata/5dd5128f16eced000e4c42ba

  Discuss Link:
    https://www.codewars.com/kata/5dd5128f16eced000e4c42ba/discuss

  Solutions Link:
    https://www.codewars.com/kata/5dd5128f16eced000e4c42ba/solutions
*/

// Long Solution
function solve(st) {
  const values = [...st].reduce((acc, char, _index, array) => {
    const firstOcurrenceIndex = array.indexOf(char);
    const lastOcurrenceIndex = array.lastIndexOf(char);

    return { ...acc, [char]: Math.abs(lastOcurrenceIndex - firstOcurrenceIndex) };
  }, {});

  const [highestValue] = Object.entries(values).sort(
    ([charA, diffA], [charB, diffB]) => diffB - diffA || charA.localeCompare(charB),
  );

  return highestValue[0];
}

// Function Export
module.exports = solve;
