/*
  Title:
    Hello Happy Codevarrior!

  Description:
    VVhat ?!?

    None of zese codevarriors seemz to remember hiz ovvn name !

    Kould you help ?


  Examples:
    var albert = new Warrior("Al")
    var boris  = new Warrior("Boris")

    albert.toString() --> "Hi! my name's Boris" <-- ohoh..

  Kata Link:
    https://www.codewars.com/kata/hello-happy-codevarrior

  Discuss Link:
    https://www.codewars.com/kata/hello-happy-codevarrior/discuss

  Solutions Link:
    https://www.codewars.com/kata/hello-happy-codevarrior/solutions
*/

// Long Solution
class Warrior {
  constructor(newName) {
    this.wName = newName
  }

  name(newName) {
    if (newName) {
      this.wName = newName
    }
    return this.wName
  }
}

Warrior.prototype.toString = function() {
  return `Hi! my name's ${this.wName}`
}

// Function Export
module.exports = Warrior
