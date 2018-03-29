/* eslint max-params: 0 */

/*
  Title:
    SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

  Description:
    Preloaded for you is a class Dog:

    class Dog {
      constructor(name, age, gender, species, size, master, loyal) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = species;
        this.legs = 4;
        this.size = size;
        this.master = master;
        this.loyal = loyal;
      }
    }
    You are then given a working class Labrador as your initial code.

    class Labrador {
      constructor(name, age, gender, master) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = "Labrador";
        this.legs = 4;
        this.size = "Large";
        this.master = master;
        this.loyal = true;
      }
    }
    Shorten it so that it meets the strict character count requirements for this Kata.

  Kata Link:
    https://www.codewars.com/kata/speedcode-number-3-x-fun-with-es6-classes-number-5-dogs-and-classes

  Discuss Link:
    https://www.codewars.com/kata/speedcode-number-3-x-fun-with-es6-classes-number-5-dogs-and-classes/discuss

  Solutions Link:
    https://www.codewars.com/kata/speedcode-number-3-x-fun-with-es6-classes-number-5-dogs-and-classes/solutions
*/

// Long Solution
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name
    this.age = age
    this.gender = gender
    this.species = species
    this.legs = 4
    this.size = size
    this.master = master
    this.loyal = loyal
  }
}

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true)
  }
}

// Function Export
module.exports = Labrador
