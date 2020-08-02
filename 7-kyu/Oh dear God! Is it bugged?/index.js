/*
  Title:
    Oh dear God! Is it bugged?

  Description:
    Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 and false otherwise.
    But looks like he has messed it up. Could you help him out? Please!

  Kata Link:
    https://www.codewars.com/kata/580e67ae22e42d797000015e

  Discuss Link:
    https://www.codewars.com/kata/580e67ae22e42d797000015e/discuss

  Solutions Link:
    https://www.codewars.com/kata/580e67ae22e42d797000015e/solutions
*/

// Long Solution
const isItBugged = (code) => /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/.test(code)

// Function Export
module.exports = isItBugged
