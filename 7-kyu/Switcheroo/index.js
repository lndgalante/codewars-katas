/*
  Title:
    Switcheroo

  Description:
    Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa).
    Leave any incidence of c untouched.

  Examples:
    'acb' --> 'bca'
    'aabacbaa' --> 'bbabcabb'

  Kata Link:
    https://www.codewars.com/kata/switcheroo

  Discuss Link:
    https://www.codewars.com/kata/switcheroo/discuss

  Solutions Link:
    https://www.codewars.com/kata/switcheroo/solutions
*/

// Long Solution
const switcheroo = x => x.replace(/[ab]/g, match => (match === 'a' ? 'b' : 'a'))

// Function Export
module.exports = switcheroo
