/*
  Title:
    Convert a Boolean to a String

  Description:
    In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.

    A function is a block of code that takes an input and produces an output.
    In this example, boolean_to_string is a function whose input is either true or false, and whose output is the string representation of the input, either "true" or "false".

    A common idea we often want to represent in code is the concept of true and false.
    A variable that can either be true or false is called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.

    Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.

    For this kata, don't worry about edge cases like where unexpected input is passed to the function.
    You'll get to worry about these enough in later exercises.

  Kata Link:
    https://www.codewars.com/kata/convert-a-boolean-to-a-string

  Discuss Link:
    https://www.codewars.com/kata/convert-a-boolean-to-a-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-a-boolean-to-a-string/solutions
*/

// Long Solution
/*
function booleanToString(b) {
  return b ? 'true' : 'false'
}
*/

// Short Solution
const booleanToString = b => `${b}`

// Function Export
module.exports = booleanToString
