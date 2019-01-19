/*
  Title:
    Get initials from person name

  Description:
    Write function toInitials returs initials for a given person name.

  Examples:
    "Bill Gates" -> "B. G."

  Notes:
    Initials should be separated with a space.

  Kata Link:
    https://www.codewars.com/kata/get-initials-from-person-name

  Discuss Link:
    https://www.codewars.com/kata/get-initials-from-person-name/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-initials-from-person-name/solutions
*/

// Long Solution
/*
const toInitials = name =>
  name.split(' ').reduce((initials, name, index) => (index === 0 ? `${name[0]}.` : `${initials} ${name[0]}.`), '')
*/

// Short Solutions
const toInitials = name => name.replace(/[a-z]+/g, '.')

// Function Export
module.exports = toInitials
