/*
  Title:
    Two fighters, one winner.

  Description:
    Create a function that returns the name of the winner in a fight between two fighters.

    Each fighter takes turns attacking the other and whoever kills the other first is victorious.
    Death is defined as having health <= 0.

    Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

    Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
    You can mutate the Fighter objects.

  Examples:
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"

    Lew attacks Harry; Harry now has 3 health.
    Harry attacks Lew; Lew now has 6 health.
    Lew attacks Harry; Harry now has 1 health.
    Harry attacks Lew; Lew now has 2 health.
    Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

  Kata Link:
    https://www.codewars.com/kata/two-fighters-one-winner

  Discuss Link:
    https://www.codewars.com/kata/two-fighters-one-winner/discuss

  Solutions Link:
    https://www.codewars.com/kata/two-fighters-one-winner/solutions
*/

// Helper
function Fighter(name, health, damagePerAttack) {
  this.name = name
  this.health = health
  this.damagePerAttack = damagePerAttack
  this.toString = function() {
    return this.name
  }
}

// Long Solution
/* const declareWinner = (fighter1, fighter2, firstAttacker) => {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack
    fighter1.health -= fighter2.damagePerAttack
  }

  if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker
  else if (fighter1.health <= 0) return fighter2.name
  return fighter1.name
} */

// Short Solution
const declareWinner = (fighter1, fighter2, firstAttacker) => {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker
}

// Function Export
module.exports = { Fighter, declareWinner }
