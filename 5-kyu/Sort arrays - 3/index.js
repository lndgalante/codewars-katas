/*
  Title:
    Sort arrays - 3

  Description:
    This time the input is an array of course-ids that are formatted in the following way:
    name-yymm

    The return of the function shall first be sorted by yymm, then by the name
    (which varies in length).

  Examples:
    sortme(['web-1305', 'site-1305', 'web-1304', 'site-1304'])

    // should return ["site-1304", "web-1304", "site-1305", "web-1305"]

  Notes:
    input: courses - array of course-names "name-yymm"
    output: sorted by "yymm", then "name"

  Kata Link:
    https://www.codewars.com/kata/sort-arrays-3

  Discuss Link:
    https://www.codewars.com/kata/sort-arrays-3/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-arrays-3/solutions
*/

// Long Solution
const sortme = courses =>
  courses.sort((a, b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b))

// Function Export
module.exports = sortme
