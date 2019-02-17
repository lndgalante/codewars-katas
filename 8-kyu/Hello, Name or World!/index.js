/*
  Title:
    Hello, Name or World!

  Description:
    Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
    Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

  Examples:
    hello "john"   => "Hello, John!"
    hello "aliCE"  => "Hello, Alice!"
    hello          => "Hello, World!" # name not given
    hello ''       => "Hello, World!" # name is an empty String

  Kata Link:
    https://www.codewars.com/kata/hello-name-or-world

  Discuss Link:
    https://www.codewars.com/kata/hello-name-or-world/discuss

  Solutions Link:
    https://www.codewars.com/kata/hello-name-or-world/solutions
*/

// Long Solution
const parseName = name => (name ? `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}` : 'World')

const hello = name => `Hello, ${parseName(name)}!`

// Function Export
module.exports = hello
