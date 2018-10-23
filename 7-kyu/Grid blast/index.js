/*
  Title:
    Grid blast!

  Description:
    Ready! Set! Fire... but where should you fire?

    The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

    var grid = ['top left',    'top middle',    'top right',
                'middle left', 'center',        'middle right',
                'bottom left', 'bottom middle', 'bottom right']

    HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

    Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

    fire(0,0); => 'top left'
    fire(1,2); => 'bottom middle'
    etc.

    Notice the grid is a monodimensional array, good luck!

  Kata Link:
    https://www.codewars.com/kata/grid-blast

  Discuss Link:
    https://www.codewars.com/kata/grid-blast/discuss

  Solutions Link:
    https://www.codewars.com/kata/grid-blast/solutions
*/

// Preloaded data
const grid = [
  'top left',
  'top middle',
  'top right',
  'middle left',
  'center',
  'middle right',
  'bottom left',
  'bottom middle',
  'bottom right',
]

// Long Solution
/*
const R = require('ramda')

const fire = (x, y) => R.splitEvery(3, grid)[y][x]
*/

// Short Solution
const fire = (x, y) => grid[x + 3 * y]

// Function Export
module.exports = fire
