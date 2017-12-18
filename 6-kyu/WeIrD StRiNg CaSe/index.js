/* 
  Title:

  Description:
    Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
    and returns the same string with all even indexed characters in each word upper cased,
    and all odd indexed characters in each word lower cased.
    The indexing just explained is zero based, so the zero-ith index is even, 
    therefore that character should be upper cased.

    The passed in string will only consist of alphabetical characters and spaces (' ').
    Spaces will only be present if there are multiple words. 
    Words will be separated by a single space (' ').

  Examples:
    toWeirdCase( "String" )
      // => returns "StRiNg"

    toWeirdCase( "Weird string case" )
      // => returns "WeIrD StRiNg CaSe"

  Link:
    https://www.codewars.com/kata/weird-string-case
*/

// Long Solution
function toWeirdCase(string) {
  return string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map(
          (char, ind) =>
            ind % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join('')
    )
    .join(' ')
}

// Function Export
module.exports = toWeirdCase
