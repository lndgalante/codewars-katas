/*
  Title:
    Convert PascalCase string into snake_case

  Description:
    Complete the function/method so that it takes CamelCase string
    and returns the string in snake_case notation. Lowercase characters can be numbers.
    If method gets number, it should return string.

  Examples:
    //  returns test_controller
    toUnderscore('TestController');

    // returns movies_and_books
    toUnderscore('MoviesAndBooks');

    // returns app7_test
    toUnderscore('App7Test');

    // returns "1"
    toUnderscore(1);

  Link:
    https://www.codewars.com/kata/convert-pascalcase-string-into-snake-case
*/

// Long Solution
/*
function toUnderscore(string) {
  if (typeof string !== 'string') return `${string}`

  return string
    .split('')
    .map(
      (char, ind) =>
        char.match(/[a-z]/i) && char === char.toUpperCase() && ind !== 0
          ? `_${char}`.toLowerCase()
          : char.toLowerCase()
    )
    .join('')
}
*/

// Short Solution
const toUnderscore = string =>
  string
    .toString()
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase()

// Regex -> https://regexr.com/3ib8o

// Function Export
module.exports = toUnderscore
