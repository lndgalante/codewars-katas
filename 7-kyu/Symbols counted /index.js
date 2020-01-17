/*
  Title:
    Symbols counted

  Description:
    In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2.
    The order of symbols should be preserved.

  Examples:
    abbreviation => a2b2revi2ton

  Kata Link:
    https://www.codewars.com/kata/59ddeeb2fc3c49186f00009c

  Discuss Link:
    https://www.codewars.com/kata/59ddeeb2fc3c49186f00009c/discuss

  Solutions Link:
    https://www.codewars.com/kata/59ddeeb2fc3c49186f00009c/solutions
*/

// Long Solution
const transform = (s) => {
  const charRepetitions = [...s].reduce((acc, char) => ({ ...acc, [char]: (acc[char] || 0) + 1 }), {});
  const sWithoutRepeatedChars = [...new Set(s)];

  return sWithoutRepeatedChars
    .map((char) => (charRepetitions[char] > 1 ? `${char}${charRepetitions[char]}` : char))
    .join('');
};

// Function Export
module.exports = transform;
