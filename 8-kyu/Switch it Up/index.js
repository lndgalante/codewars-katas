/*
  Title:
    Switch it Up!

  Description:
    When provided with a number between 0-9, return it in words.

    Input :: 1

    Output :: "One".

    Try using "Switch" statements.

    This kata is meant for beginners. Rank and upvote to bring it out of beta

  Kata Link:
    https://www.codewars.com/kata/switch-it-up

  Discuss Link:
    https://www.codewars.com/kata/switch-it-up/discuss

  Solutions Link:
    https://www.codewars.com/kata/switch-it-up/solutions
*/

// Long Solution
/*
function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero'
    case 1:
      return 'One'
    case 2:
      return 'Two'
    case 3:
      return 'Three'
    case 4:
      return 'Four'
    case 5:
      return 'Five'
    case 6:
      return 'Six'
    case 7:
      return 'Seven'
    case 8:
      return 'Eight'
    case 9:
      return 'Nine'
  }
}
*/

// Short Solution
const switchItUp = n =>
  [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ][n]

// Function Export
module.exports = switchItUp
