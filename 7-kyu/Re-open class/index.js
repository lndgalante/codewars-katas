/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Re-open class

  Description:
    Ruby and Javascript let you re-open classes so you can add new functionalities to existing classes and objects.

    To demonstrate this, you'll have to add a new method (called my_new_method in Ruby or myNewMethod in JS)
    into the String class that simply calls the upcase method (toUpperCase() in Javascript).

  Examples:
    "abc".myNewMethod(); // "ABC"

  Kata Link:
    https://www.codewars.com/kata/re-open-class

  Discuss Link:
    https://www.codewars.com/kata/re-open-class/discuss

  Solutions Link:
    https://www.codewars.com/kata/re-open-class/solutions
*/

// Long Solution
/*
String.prototype.myNewMethod = function() {
  return this.toUpperCase()
}
*/

// Short Solution
String.prototype.myNewMethod = String.prototype.toUpperCase

// Function Export
module.exports = String
