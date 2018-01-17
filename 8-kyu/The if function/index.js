/*
  Title:
    The 'if' function

  Description:
    Who likes keywords? Nobody likes keywords, so why use them?

    You know what keyword I use too much? if! We should make a function called _if, with its arguments as a logical test
    and two functions/lambdas where the first function is executed if the boolean is true, and the second if it's false,
    like an if/else statement, so that we don't have to mess around with those nasty keywords!
    Even so, It should support truthy/falsy types just like the keyword.

  Examples:
    _if(true, function(){console.log("True")}, function(){console.log("false")})
      // Logs 'True' to the console.

  Kata Link:
    https://www.codewars.com/kata/the-if-function

  Discuss Link:
    https://www.codewars.com/kata/the-if-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-if-function/solutions
*/

// Short Solution
const _if = (bool, func1, func2) => (bool ? func1() : func2())

// Function Export
module.exports = _if
