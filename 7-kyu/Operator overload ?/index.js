/*
  Title:
    Operator overload ?

  Description:
    We have a class named 'Foo' with a 'val' attribute.

    var foo = new Foo(2);     // foo.val = 2;
    var boo = new Foo(3);    // boo.val = 3;

    We want to be able to sum two Foo object using the '+' operator.

    foo + boo // => must return 5

  Kata Link:
    https://www.codewars.com/kata/operator-overload

  Discuss Link:
    https://www.codewars.com/kata/operator-overload/discuss

  Solutions Link:
    https://www.codewars.com/kata/operator-overload/solutions
*/

// Long Solution
class Foo {
  constructor(newValue) {
    this.value = newValue
  }

  valueOf() {
    return this.value
  }
}

// Hacky Solution
/*
const Foo = Number
*/

// Function Export
module.exports = Foo
