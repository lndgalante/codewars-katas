/*
  Title:
    Crash Override

  Description:
    Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

    Your task is to create a function that, given a proper first and last name, will return the correct alias.

    I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

  Examples:
    var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
    var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

    aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
    aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

  Kata Link:
    https://www.codewars.com/kata/crash-override

  Discuss Link:
    https://www.codewars.com/kata/crash-override/discuss

  Solutions Link:
    https://www.codewars.com/kata/crash-override/solutions
*/

// Pre-loaded data
const firstName = {
  A: 'Alpha',
  B: 'Beta',
  C: 'Cache',
  D: 'Data',
  E: 'Energy',
  F: 'Function',
  G: 'Glitch',
  H: 'Half-life',
  I: 'Ice',
  J: 'Java',
  K: 'Keystroke',
  L: 'Logic',
  M: 'Malware',
  N: 'Nagware',
  O: 'OS',
  P: 'Phishing',
  Q: 'Quantum',
  R: 'RAD',
  S: 'Strike',
  T: 'Trojan',
  U: 'Ultraviolet',
  V: 'Vanilla',
  W: 'WiFi',
  X: 'Xerox',
  Y: 'Y',
  Z: 'Zero',
}

const surname = {
  A: 'Analogue',
  B: 'Bomb',
  C: 'Catalyst',
  D: 'Discharge',
  E: 'Electron',
  F: 'Faraday',
  G: 'Gig',
  H: 'Hacker',
  I: 'IP',
  J: 'Jabber',
  K: 'Killer',
  L: 'Lazer',
  M: 'Mike',
  N: 'n00b',
  O: 'Overclock',
  P: 'Payload',
  Q: 'Quark',
  R: 'Roy',
  S: 'Spy',
  T: 'T-Rex',
  U: 'Unit',
  V: 'Virus',
  W: 'Worm',
  X: 'X',
  Y: 'Yob',
  Z: 'Zombie',
}

// Long Solution
const firstLetter = str => str[0].toUpperCase()

const isValidName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) =>
  isValidName(fName[0]) && isValidName(sName[0])
    ? `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}`
    : 'Your name must start with a letter from A - Z.'

// Function Export
module.exports = aliasGen
