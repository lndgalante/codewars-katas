/*
  Title:
    regex validation of 24 hours time.

  Description:
    Write a regex to validate a 24 hours time string.

  Examples:
    Accepted:
    01:00 - 1:00
    Not accepted:
    24:00

  Notes:
    You should check for correct length and no spaces.

  Kata Link:
    https://www.codewars.com/kata/regex-validation-of-24-hours-time

  Discuss Link:
    https://www.codewars.com/kata/regex-validation-of-24-hours-time/discuss

  Solutions Link:
    https://www.codewars.com/kata/regex-validation-of-24-hours-time/solutions
*/

// Long Solution - https://regexr.com/476l0
/*
const validateTime = time => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
*/

// Short Solution - https://regexr.com/476l3
const validateTime = time => /^([01]?\d|2[0-3]):[0-5]\d$/.test(time)

// Function Export
module.exports = validateTime
