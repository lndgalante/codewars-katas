/*
  Title:
    Ninja vs Samurai: Strike

  Description:
    Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

    var ninja = new Warrior('Ninja');
    var samurai = new Warrior('Samurai');

    samurai.strike(ninja, 3);
    // ninja.health should == 70

    Can you figure out what is wrong?

  Kata Link:
    https://www.codewars.com/kata/ninja-vs-samurai-strike

  Discuss Link:
    https://www.codewars.com/kata/ninja-vs-samurai-strike/discuss

  Solutions Link:
    https://www.codewars.com/kata/ninja-vs-samurai-strike/solutions
*/

// Long Solution
class Warrior {
  constructor(name) {
    this.name = name
    this.health = 100
  }

  strike(enemy, swings) {
    enemy.health -= 10 * swings
  }
}

// Function Export
module.exports = Warrior
