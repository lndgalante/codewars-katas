/*
  Title:
    max diff - easy

  Description:
    Write a function which maps a function over the lists in a list:

      function gridMap(fn,xss) { return [[]]; }

  Examples:
    const xss = [
                  [1,2,3],
                  [4,5,6]
                ];

    gridMap( x => x+1 , xss );  =>  [[2,3,4],[5,6,7]]
    gridMap( x => x**2 , xss );  =>  [[1,4,9],[16,25,36]]

    const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

    gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']];

  Kata Link:
    https://www.codewars.com/kata/606b43f4adea6e00425dff42

  Discuss Link:
    https://www.codewars.com/kata/606b43f4adea6e00425dff42/discuss

  Solutions Link:
    https://www.codewars.com/kata/606b43f4adea6e00425dff42/solutions
*/

// Long Solution
function gridMap(fn, matrix) {
  return matrix.map((row) => row.map(fn))
}

// Function Export
module.exports = gridMap
