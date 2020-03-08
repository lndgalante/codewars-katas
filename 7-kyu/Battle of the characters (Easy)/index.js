/*
  Title:
    Battle of the characters (Easy)

  Description:
    Groups of characters decided to make a battle.
    Help them to figure out which group is more powerful.
    Create a function that will accept 2 variables and return the one who's stronger.

      Rules:
    - Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
    - Only capital chatacters can and will participate a battle.
    - Only two groups to a fight.
    - Group whose total power (A + B + C + ...) is bigger wins.
    - If the powers are equal, it's a tie.

  Examples:
    battle("ONE", "TWO"); // => "TWO"`
    battle("ONE", "NEO"); // => "Tie!"

    battle("ONE", "TWO"); // => "TWO"`
    battle("ONE", "NEO"); // => "Tie!"

  Kata Link:
    https://www.codewars.com/kata/battle-of-the-characters-easy

  Discuss Link:
    https://www.codewars.com/kata/battle-of-the-characters-easy/discuss

  Solutions Link:
    https://www.codewars.com/kata/battle-of-the-characters-easy/solutions
*/

// Long Solution
/*
const characterPowers = Array.from({ length: 26 })
  .map((_, index) => String.fromCharCode(index + 65))
  .reduce((dictionary, char, index) => ((dictionary[char] = index + 1), dictionary), {})

const getCharactersPower = chars => [...chars].reduce((total, char) => total + characterPowers[char], 0)

const battle = (x, y) => {
  const xPower = getCharactersPower(x)
  const yPower = getCharactersPower(y)

  if (xPower === yPower) return 'Tie!'
  return xPower > yPower ? x : y
}
*/

// Short Solution
const getCharactersPower = chars => [...chars].reduce((total, char) => total + char.charCodeAt(0) - 64, 0)

const battle = (x, y) => {
  const xPower = getCharactersPower(x)
  const yPower = getCharactersPower(y)

  return xPower > yPower ? x : (xPower < yPower ? y : 'Tie!')
}

// Function Export
module.exports = battle
