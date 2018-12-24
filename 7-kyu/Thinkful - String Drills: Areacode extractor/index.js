/*
  Title:
    Thinkful - String Drills: Areacode extractor

  Description:
    You've got a bunch of textual data with embedded phone numbers.
    Write a function area_code() that finds and returns just the area code portion of the phone number.

  Examples:
    >>> message = "The supplier's phone number is (555) 867-5309"
    >>> area_code(message)
    '555'

  Notes:
    The returned area code should be a string, not a number.
    Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.

  Kata Link:
    https://www.codewars.com/kata/thinkful-string-drills-areacode-extractor

  Discuss Link:
    https://www.codewars.com/kata/thinkful-string-drills-areacode-extractor/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinkful-string-drills-areacode-extractor/solutions
*/

// Long Solution
/*
const areaCode = text =>
  text
    .match(/\((\d{3})\)/g)
    .toString()
    .replace('(', '')
    .replace(')', '')
*/

// Short Solution
const areaCode = text => text.match(/\((\d{3})\)/)[1]

// Function Export
module.exports = areaCode
