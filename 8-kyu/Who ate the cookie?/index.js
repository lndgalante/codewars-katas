/*
  Title:
    Who ate the cookie?

  Description:
    For this problem you must create a program that says who ate the last cookie.

    If the input is a string then "Zach" ate the cookie.
    If the input is a float or an int then "Monica" ate the cookie.
    If the input is anything else "the dog" ate the cookie.

    The way to return the statement is: "Who ate the last cookie? It was (name)!"

  Examples:
    Input = "hi" --> Output = "Who ate the last cookie? It was Zach!
    (The reason you return Zach is because the input is a string)

  Notes:
    Make sure you return the correct message with correct spaces and punctuation.

  Kata Link:
    https://www.codewars.com/kata/who-ate-the-cookie

  Discuss Link:
    https://www.codewars.com/kata/who-ate-the-cookie/discuss

  Solutions Link:
    https://www.codewars.com/kata/who-ate-the-cookie/solutions
*/

// Long Solution
/*
const cookie = x => {
  if (typeof x === 'string') return 'Who ate the last cookie? It was Zach!'
  if (typeof x === 'number') return 'Who ate the last cookie? It was Monica!'
  return 'Who ate the last cookie? It was the dog!'
}
*/

// Short Solution
const cookie = x =>
  `Who ate the last cookie? It was ${
    typeof x === 'string'
      ? 'Zach'
      : typeof x === 'number' ? 'Monica' : 'the dog'
  }!`

// Function Export
module.exports = cookie
