/*
  Title:
    Javascript Namespacing

  Description:
    Define a class named MyClass inside a namespace MyNamespace.
    The class constructor should accept a single string argument.
    It should also have a function named sayHello that returns the string passed into the constructor.

  Examples:
    var myObject = new MyNamespace.MyClass('Hello!');
    var phrase = myObject.sayHello(); // phrase should be 'Hello!'

  Notes:
    The interesting part is that MyClass should only be accessible via the namespace and should not define any extra global variables.
    Code should not redefine an existing namespace, but should also function if the namespace is not previously defined.

  Kata Link:
    https://www.codewars.com/kata/javascript-namespacing

  Discuss Link:
    https://www.codewars.com/kata/javascript-namespacing/discuss

  Solutions Link:
    https://www.codewars.com/kata/javascript-namespacing/solutions
*/

// Preloaded
class MyNamespace {}

// Long Solution
MyNamespace.MyClass = class {
  constructor(string) {
    this.string = string
  }

  sayHello() {
    return this.string
  }
}

// Function Export
module.exports = MyNamespace
