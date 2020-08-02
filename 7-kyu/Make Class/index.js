/* eslint no-return-assign: 0 */

/*
  Title:
    Make Class

  Description:
    I don't like writing classes like this:

    function Animal(name, species, age, health, weight, color) {
      this.name = name;
      this.species = species;
      this.age = age;
      this.health = health;
      this.weight = weight;
      this.color = color;
    }

    Give me the power to create a similar class like this:
    const Animal = makeClass("name","species","age","health","weight","color")

  Kata Link:
    https://www.codewars.com/kata/5d774cfde98179002a7cb3c8

  Discuss Link:
    https://www.codewars.com/kata/5d774cfde98179002a7cb3c8/discuss

  Solutions Link:
    https://www.codewars.com/kata/5d774cfde98179002a7cb3c8/solutions
*/

// Long Solution
function makeClass(...properties) {
  return function (...args) {
    properties.forEach((property, index) => (this[property] = args[index]))
  }
}

// Function Export
module.exports = makeClass
