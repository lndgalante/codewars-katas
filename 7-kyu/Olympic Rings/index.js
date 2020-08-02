/*
  Title:
    Olympic Rings

  Description:
    To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

    Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them.
    'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!!
    Please note for this kata you can count lower case 'g' as only one ring.

    Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

    if score is 1 or less,  return 'Not even a medal!';
    if score is 2, return 'Bronze!';
    if score is 3, return 'Silver!';
    if score is more than 3, return 'Gold!';

    Dots over i's and any other letters don't count as rings.

  Kata Link:
    https://www.codewars.com/kata/57d06663eca260fe630001cc

  Discuss Link:
    https://www.codewars.com/kata/57d06663eca260fe630001cc/discuss

  Solutions Link:
    https://www.codewars.com/kata/57d06663eca260fe630001cc/solutions
*/

// Long Solution
// abdegopq  ADOPQR
const letterValues = {
  a: 1,
  A: 1,
  b: 1,
  B: 2,
  c: 0,
  C: 0,
  d: 1,
  D: 1,
  e: 1,
  E: 0,
  f: 0,
  F: 0,
  g: 1,
  G: 0,
  h: 0,
  H: 0,
  i: 0,
  I: 0,
  j: 0,
  J: 0,
  k: 0,
  K: 0,
  l: 0,
  L: 0,
  m: 0,
  M: 0,
  n: 0,
  N: 0,
  o: 1,
  O: 1,
  p: 1,
  P: 1,
  q: 1,
  Q: 1,
  r: 0,
  R: 1,
  s: 0,
  S: 0,
  t: 0,
  T: 0,
  u: 0,
  U: 0,
  v: 0,
  V: 0,
  w: 0,
  W: 0,
  x: 0,
  X: 0,
  y: 0,
  Y: 0,
  z: 0,
  Z: 0,
}

function olympicRing(string) {
  const totalRings = string.split('').reduce((acc, character) => acc + letterValues[character], 0)
  const finalScore = Math.floor(totalRings / 2)

  if (finalScore <= 1) return 'Not even a medal!'
  if (finalScore === 2) return 'Bronze!'
  if (finalScore === 3) return 'Silver!'
  return 'Gold!'
}

// Function Export
module.exports = olympicRing
