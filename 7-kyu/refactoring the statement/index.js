/*
  Title:
    refactoring the statement

  Description:
    We want to convert numbers in a given string to specific characters according to ASCII code with some manipulation on it.
    This statement 'str8ng is he17e' should converted to 'string is here', its just converting these numbers to ASCII code then to a char according to it.

    So you should understand how ASCII code of chars are sorted, and if its begin with 'a' as 0, next one is 'b' which is 1 in someway.
    Each word contains just one character to convert the number to it.

  Examples:
    if given string is '0pple' that will return 'apple'.

  Kata Link:
    https://www.codewars.com/kata/refactoring-the-statement

  Discuss Link:
    https://www.codewars.com/kata/refactoring-the-statement/discuss

  Solutions Link:
    https://www.codewars.com/kata/refactoring-the-statement/solutions
*/

// Long Solution
/*
const refactoryString = str =>
  str
    .split(' ')
    .map(word => word.replace(/\d+/g, match => String.fromCharCode(`${97 + Number(match)}`)))
    .join(' ')
*/

// Short Solution
const refactoryString = string => string.replace(/\d+/g, match => String.fromCharCode(`${97 + Number(match)}`))

// Function Export
module.exports = refactoryString
