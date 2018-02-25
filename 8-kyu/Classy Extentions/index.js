/* eslint no-undef: 0 */

/*
  Title:
    Classy Extensions

  Description:
    Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing class extends You will be preloaded with the Animal class, so you should only edit the Cat class.

    Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g.
    'Mr Whiskers meows.'
    The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

  Kata Link:
    https://www.codewars.com/kata/classy-extentions

  Discuss Link:
    https://www.codewars.com/kata/classy-extentions/discuss

  Solutions Link:
    https://www.codewars.com/kata/classy-extentions/solutions
*/

// Long Solution
class Cat extends Animal {
  constructor(name) {
    super()
    this.name = name
  }

  speak() {
    return `${this.name} meows.`
  }
}

// Function Export
module.exports = Cat
