/*
  Title:
    String Matcher

  Description:
    isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).
    Spaces will be ignored but special characters and numbers won't match the string and return false.

    For example:
    isMatching("email box", "b aIl", "Mo x e") return true
    butisMatching("bouh", "0b", "uh") return false

    You need to be able to use all the caracters from the two strings so:isMatching("kata", "kt", "aaa") return false

  Kata Link:
    https://www.codewars.com/kata/565ce4ab24ef4aee6a000074

  Discuss Link:
    https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/discuss

  Solutions Link:
    https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/solutions
*/

// Long Solution
const parseString = (string) =>
  [...string.toLowerCase()]
    .sort()
    .join('')
    .trim();

const isMatching = (string, string1, string2) => parseString(string) === parseString(`${string1}${string2}`);

// Function Export
module.exports = isMatching;
