/*
  Title:
    JavaScript class-like objects

  Description:
    For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments.
    It should have a toString method that returns a human readable string indicating the argument information passed in.
    It should also allow the name property to be set.

  Examples:
    const dog = new Animal('Max', 'dog');

    dog.toString();
    // should return 'Max is a dog'

    dog.type;
    // should == 'dog'

    dog.name;
    // should == 'Max'

    dog.name = 'Lassie';
    // should set name to 'Lassie'

  Kata Link:
    https://www.codewars.com/kata/javascript-class-like-objects

  Discuss Link:
    https://www.codewars.com/kata/javascript-class-like-objects/discuss

  Solutions Link:
    https://www.codewars.com/kata/javascript-class-like-objects/solutions
*/

// Long Solution
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  toString() {
    const { name, type } = this
    return `${name} is a ${type}`
  }
}

// Function Export
module.exports = Animal
