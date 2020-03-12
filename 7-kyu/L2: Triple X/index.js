/*
  Title:
    L2: Triple X

  Description:
    Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

  Examples:
    tripleX("abraxxxas") → true
    tripleX("xoxotrololololololoxxx") → false
    tripleX("softX kitty, warm kitty, xxxxx") → true
    tripleX("softx kitty, warm kitty, xxxxx") → falseNote :

  Notes:
    - capital X's do not count as an occurrence of "x".
    - if there are no "x"'s then return false

  Kata Link:
    https://www.codewars.com/kata/568dc69683322417eb00002c

  Discuss Link:
    https://www.codewars.com/kata/568dc69683322417eb00002c/discuss

  Solutions Link:
    https://www.codewars.com/kata/568dc69683322417eb00002c/solutions
*/

// Long Solution
/*
const tripleX = (str) => {
  const firstIndex = str.indexOf('x');
  return str[firstIndex + 1] === 'x' && str[firstIndex + 2] === 'x';
};
*/

// Short Solution - RegEx: https://regexr.com/4s2ab
const tripleX = (string) => /^[^x]*x{3}/.test(string);

// Function Export
module.exports = tripleX;
