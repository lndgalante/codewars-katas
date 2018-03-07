/*
  Title:
    Did she say hallo?

  Description:
    You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

    Write a simple regex to check if the string contains the word hallo in different languages.

    These are the languages of the possible people you met the night before:

    hello - english
    ciao - italian
    salut - french
    hallo - german
    hola - spanish
    ahoj - czech republic
    czesc - polish
    By the way, how cool is the czech republic hallo!!

    PS. you can assume the input is a string. PPS. to keep this a beginner exercise you don't need to check if the greeting is a subset of word ('Hallowen' can pass the test)

    PS. regex should be case insensitive to pass the tests

  Kata Link:
    https://www.codewars.com/kata/did-she-say-hallo

  Discuss Link:
    https://www.codewars.com/kata/did-she-say-hallo/discuss

  Solutions Link:
    https://www.codewars.com/kata/did-she-say-hallo/solutions
*/

// Long Solution
/*
const validateHello = greetings =>
  /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings)
*/

// Short Solution
const validateHello = greetings =>
  /(h[ea]llo|ciao|salut|hola|ahoj|czesc)/i.test(greetings)

// Function Export
module.exports = validateHello
