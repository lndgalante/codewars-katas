/*
  Title:
    Cat and Mouse - Easy Version

  Description:
    You will be given a string (x) featuring a cat 'C' and a mouse 'm'.
    The rest of the string will be made up of '.'.

    You need to find out if the cat can catch the mouse from it's current position.
    The cat can jump over three characters.

  Examples:
    C.....m returns 'Escaped!' <-- more than three characters between

    C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

  Kata Link:
    https://www.codewars.com/kata/cat-and-mouse-easy-version

  Discuss Link:
    https://www.codewars.com/kata/cat-and-mouse-easy-version/discuss

  Solutions Link:
    https://www.codewars.com/kata/cat-and-mouse-easy-version/solutions
*/

// Long Solution
/*
const catMouse = x => (x.split('.').length - 1 > 3 ? 'Escaped!' : 'Caught!')
*/

// Short Solution - RegExp: https://regexr.com/408dj
const catMouse = x => (/C\.{0,3}m/.test(x) ? 'Caught!' : 'Escaped!')

// Function Export
module.exports = catMouse
