/*
  Title:
    Who let the dogs out?

  Description:
    I wanted to write some classes for dogs. In my model dogs either bark or sleep.
    I know that it is popular practice to set default values like this
    var value = value || DEFAULT_VALUE

    And so i did. But something is wrong, and I don't know why. Can you help me out?

  Kata Link:
    https://www.codewars.com/kata/who-let-the-dogs-out

  Discuss Link:
    https://www.codewars.com/kata/who-let-the-dogs-out/discuss

  Solutions Link:
    https://www.codewars.com/kata/who-let-the-dogs-out/solutions
*/

// Long Solution
const BARK = 'woof woof'
const SLEEP = 'zzzzzzzzz….'

const dogBarkByDefault = (bark = true) => (bark ? BARK : SLEEP)

const dogBarkOnlyIfToldSo = (bark = false) => (bark ? BARK : SLEEP)

const dogDontBarkByDefault = (dontBark = true) => (dontBark ? SLEEP : BARK)

const dogDontBarkOnlyIfToldSo = (dontBark = false) => (dontBark ? SLEEP : BARK)

// Function Export
module.exports = {
  BARK,
  SLEEP,
  dogBarkByDefault,
  dogBarkOnlyIfToldSo,
  dogDontBarkByDefault,
  dogDontBarkOnlyIfToldSo,
}
