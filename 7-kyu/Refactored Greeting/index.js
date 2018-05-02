/*
  Title:
    Refactored Greeting

  Description:
    The following code could use a bit of object oriented artistry.
    While its a simple method and works just fine as it is, in a larger system its best to organize methods into classes/objects.
    Refactor the following code so that it belongs to a Person class/object.
    Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

  Examples:
    var joe = new Person('Joe');
    joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
    joe.name           // should == 'Joe'

  Kata Link:
    https://www.codewars.com/kata/refactored-greeting

  Discuss Link:
    https://www.codewars.com/kata/refactored-greeting/discuss

  Solutions Link:
    https://www.codewars.com/kata/refactored-greeting/solutions
*/

// Long Solution
class Person {
  constructor(name) {
    this.name = name
  }

  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`
  }
}

// Function Export
module.exports = Person
