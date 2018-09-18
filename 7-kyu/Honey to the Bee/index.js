/* eslint no-unused-vars: 0 */

/*
  Title:
    Honey to the Bee

  Description:
    Find out why the amount of honey in the hive is not increasing.

  Kata Link:
    https://www.codewars.com/kata/honey-to-the-bee

  Discuss Link:
    https://www.codewars.com/kata/honey-to-the-bee/discuss

  Solutions Link:
    https://www.codewars.com/kata/honey-to-the-bee/solutions
*/

// Long Solution
class Bee {
  constructor(capacity, hive) {
    Object.assign(this, { capacity, hive })
  }

  unloadPollen() {
    const { hive, capacity } = this
    hive.addPollen(capacity)
  }
}

class Hive {
  constructor() {
    this.pollen = 100
  }

  addPollen(pollen) {
    this.pollen += pollen
  }

  getPollen() {
    return this.pollen
  }
}

// Function Export
module.exports = Bee
