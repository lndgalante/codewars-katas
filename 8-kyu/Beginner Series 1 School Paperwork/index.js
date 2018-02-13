/*
  Title:
    Beginner Series #1 School Paperwork

  Description:
    Your classmates asked you to copy some paperwork for them.
    You know that there are 'n' classmates and the paperwork has 'm' pages.

    Your task is to calculate how many blank pages do you need.

  Examples:
    paperwork(5, 5) == 25

  Notes:
   If n or m < 0 return 0!

  Kata Link:
    https://www.codewars.com/kata/beginner-series-number-1-school-paperwork

  Discuss Link:
    https://www.codewars.com/kata/beginner-series-number-1-school-paperwork/discuss

  Solutions Link:
    https://www.codewars.com/kata/beginner-series-number-1-school-paperwork/solutions
*/

// Long Solution
const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m)

// Function Export
module.exports = paperwork
