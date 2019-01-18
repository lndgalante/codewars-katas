/*
  Title:
    Find the anonymous function in the array

  Description:
    Find the anonymous function in the given array and use the function to filter the array

    Input
    Your input. First Parameter will be an array with an anonymous function somewhere in the lot,
    The second Parameter will be an array which you will filter using the anonymous function you find.

    Output
    Your output. Output a filtered version of the second parameter using the function found in the first parameter.

    Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  Kata Link:
    https://www.codewars.com/kata/find-the-anonymous-function

  Discuss Link:
    https://www.codewars.com/kata/find-the-anonymous-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-anonymous-function/solutions
*/

// Long Solution
/*
const findFunction = (func, arr) => {
  const functionFound = func.find(element => typeof element === 'function')
  return arr.filter(functionFound)
}
*/

// Short Solution
const findFunction = (func, arr) => arr.filter(func.find(element => typeof element === 'function'))

// Function Export
module.exports = findFunction
