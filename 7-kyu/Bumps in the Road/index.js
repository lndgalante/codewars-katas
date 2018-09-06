/*
  Title:
    Bumps in the Road

  Description:
    Your car is old, it breaks easily.
    The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

    Unfortunately for you, your drive is very bumpy!
    Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely.
    15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

  Kata Link:
    https://www.codewars.com/kata/bumps-in-the-road

  Discuss Link:
    https://www.codewars.com/kata/bumps-in-the-road/discuss

  Solutions Link:
    https://www.codewars.com/kata/bumps-in-the-road/solutions
*/

// Long Solution
/*
const bump = x => {
  if (!x.includes('n')) return 'Woohoo!'
  return x.match(/n/g).length > 15 ? 'Car Dead' : 'Woohoo!'
}
*/

// Short Solution
const bump = x => ((x.match(/n/g) || []).length > 15 ? 'Car Dead' : 'Woohoo!')

// Function Export
module.exports = bump
