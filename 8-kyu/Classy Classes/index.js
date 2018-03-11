/*
  Title:
    Classy Classes

  Description:
    Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

    Your task is to complete this Class, the Person class has been created.
    You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return
    johns age is 34

  Kata Link:
    https://www.codewars.com/kata/classy-classes

  Discuss Link:
    https://www.codewars.com/kata/classy-classes/discuss

  Solutions Link:
    https://www.codewars.com/kata/classy-classes/solutions
*/

// Long Solution
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get info() {
    return `${this.name}s age is ${this.age}`
  }
}

// Function Export
module.exports = Person
