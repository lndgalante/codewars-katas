/*
  Title:
    Russian postal code checker

  Description:
    You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.

    A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.

    Please also keep in mind that a valid post code cannot start with digit 0, 5, 7, 8 or 9

    Valid postcode example 198328, 310003, 424000

    Invalid postcode examples 12A483, 1@63, 111, 056879

  Kata Link:
    https://www.codewars.com/kata/russian-postal-code-checker

  Discuss Link:
    https://www.codewars.com/kata/russian-postal-code-checker/discuss

  Solutions Link:
    https://www.codewars.com/kata/russian-postal-code-checker/solutions
*/

// Long Solution
const zipvalidate = postcode => /^[12346]\d{5}$/g.test(postcode)

// Function Export
module.exports = zipvalidate
