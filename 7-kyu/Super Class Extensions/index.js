/*
  Title:
    Super Class Extensions

  Description:
    Classy Extensions with Super, this kata is mainly aimed at the new JS ES6 Update introducing class extends

    Task
    Your task is to complete the Cat class which Extends Animal,
    we want to go to use the original speak method as well,
    so you must use the super method so the speak method for Cat now returns.

    e.g. 'Mr Whiskers makes a noise, Mr Whiskers goes meow.'

  Kata Link:
    https://www.codewars.com/kata/super-class-extensions

  Discuss Link:
    https://www.codewars.com/kata/super-class-extensions/discuss

  Solutions Link:
    https://www.codewars.com/kata/super-class-extensions/solutions
*/

// Long Solution
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return `${this.name} makes a noise, `
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }

  speak() {
    return `${super.speak()}${this.name} goes meow.`
  }
}

// Function Export
module.exports = Cat
