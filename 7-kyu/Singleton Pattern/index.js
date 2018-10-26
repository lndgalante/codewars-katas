/*
  Title:
    Singleton Pattern

  Description:
    In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object.
    This is useful when exactly one object is needed to coordinate actions across the system.

    Create an Singleton pattern, so there is one object in system.

  Examples:
    var obj1 = new Singleton();
    var obj2 = new Singleton();
    obj1 === obj2; // => true
    obj1.test = 1;
    obj2.test; // => 1

  Kata Link:
    https://www.codewars.com/kata/singleton-pattern

  Discuss Link:
    https://www.codewars.com/kata/singleton-pattern/discuss

  Solutions Link:
    https://www.codewars.com/kata/singleton-pattern/solutions
*/

// Long Solution
const Singleton = (function() {
  let instance

  return function() {
    if (!instance) instance = this
    return instance
  }
})()

// Function Export
module.exports = Singleton
