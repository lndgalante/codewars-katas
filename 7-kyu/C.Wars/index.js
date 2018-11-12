/*
  Title:
    C.Wars

  Description:
    Normally we have firstname,middle and the last name but there may be more than one word in a name . Like a South indian one .

    Similar to those kinda names we need to initiallize the names .

    See the pattern Below

    initials('code wars') => returns C.Wars
    initials('Barack Hussain obama') => returns B.H.Obama

    Complete the function initials.

  Kata Link:
    https://www.codewars.com/kata/cwars

  Discuss Link:
    https://www.codewars.com/kata/cwars/discuss

  Solutions Link:
    https://www.codewars.com/kata/cwars/solutions
*/

// Long Solution
const initials = n =>
  n
    .split(' ')
    .map(
      (word, index, array) =>
        index === array.length - 1
          ? word.charAt(0).toUpperCase() + word.slice(1)
          : word.charAt(0).toUpperCase()
    )
    .join('.')

// Function Export
module.exports = initials
