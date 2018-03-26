/* eslint valid-typeof: 0 */

/*
  Title:
    For Twins: 1. Types

  Description:
    Prolog:
    This kata series was created for friends of mine who just started to learn programming.
    Wish you all the best and keep your mind open and sharp!

    Task:
    Write function typeValidation that will accept two parameters:
    variable and type and check if type of variable is matching type. Return true if types match or false if not.

  Examples:
    typeValidation(42, "number");   // => true
    typeValidation("42", "number"); // => false

  Kata Link:
    https://www.codewars.com/kata/for-twins-1-types

  Discuss Link:
    https://www.codewars.com/kata/for-twins-1-types/discuss

  Solutions Link:
    https://www.codewars.com/kata/for-twins-1-types/solutions
*/

// Long Solution
const typeValidation = (variable, type) => typeof variable === type

// Function Export
module.exports = typeValidation
