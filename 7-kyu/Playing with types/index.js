/*
  Title:
    Playing with types

  Description:
    JavaScript is a dinamically typed programming language.
    This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.
    You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

  Examples:
    typing(2);    // returns number=2
    typing(true); // returns boolean=true

  Kata Link:
    https://www.codewars.com/kata/playing-with-types

  Discuss Link:
    https://www.codewars.com/kata/playing-with-types/discuss

  Solutions Link:
    https://www.codewars.com/kata/playing-with-types/solutions
*/

// Long Solution
/*
const typing = param => {
  if (typeof param === 'undefined') return 'undefined'

  const parsedParam = typeof param === 'function' ? param.toString() : JSON.stringify(param)
  return `${typeof param}=${parsedParam}`
}
*/

// Short Solution
const typing = parameter =>
  typeof parameter === 'undefined' ? 'undefined' : `${typeof parameter}=${JSON.stringify(parameter) || parameter}`

// Function Export
module.exports = typing
