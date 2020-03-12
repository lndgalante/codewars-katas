/*
  Title:
    Alphabet war

  Description:
    Introduction

    There is a war and nobody knows - the alphabet war!
    There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
    Task

    Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

    The left side letters and their power:

    w - 4
    p - 3
    b - 2
    s - 1

    The right side letters and their power:

    m - 4
    q - 3
    d - 2
    z - 1

    The other letters don't have power and are only victims.

  Examples:
    alphabetWar("z");        //=> Right side wins!
    alphabetWar("zdqmwpbs"); //=> Let's fight again!
    alphabetWar("zzzzs");    //=> Right side wins!
    alphabetWar("wwwwwwz");  //=> Left side wins!

  Kata Link:
    https://www.codewars.com/kata/alphabet-war

  Discuss Link:
    https://www.codewars.com/kata/alphabet-war/discuss

  Solutions Link:
    https://www.codewars.com/kata/alphabet-war/solutions
*/

// Long Solution
/*
const leftValues = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
}

const rightValues = {
  m: 4,
  q: 3,
  d: 2,
  z: 1,
}

const alphabetWar = fight => {
  const leftSideSum = [...fight].reduce((total, char) => total + (leftValues[char] || 0), 0)
  const rightSideSum = [...fight].reduce((total, char) => total + (rightValues[char] || 0), 0)

  if (leftSideSum > rightSideSum) return 'Left side wins!'
  if (leftSideSum < rightSideSum) return 'Right side wins!'
  if (leftSideSum === rightSideSum) return "Let's fight again!"
}
*/

// Short Solution
const alphabetWar = fight => {
  const charValues = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 }
  const result = [...fight].reduce((total, char) => total + (charValues[char] || 0), 0)

  if (!result) return "Let’s fight again!"
  return `${result < 0 ? 'Left' : 'Right'} side wins!`
}

// Function Export
module.exports = alphabetWar
