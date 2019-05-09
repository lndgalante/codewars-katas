/*
  Title:
    Inverting a Hash

  Description:
    Given a Hash made up of keys and values, invert the hash by swapping them.

  Examples:
    Given:
      { a: '1',
        b: '2',
        c: '3' }

    Return:
      { 1: 'a',
        2: 'b',
        3: 'c' }

    Given:
      { foo:   'bar',
        hello: 'world' }

    Return:
      { bar:   'foo',
        world: 'hello' }

  Notes:
    - Keys and values may be of any type appropriate for use as a key.
    - All hashes provided as input will have unique values, so the inversion is involutive.
      In other words, do not worry about identical values stored under different keys.

  Kata Link:
    https://www.codewars.com/kata/inverting-a-hash

  Discuss Link:
    https://www.codewars.com/kata/inverting-a-hash/discuss

  Solutions Link:
    https://www.codewars.com/kata/inverting-a-hash/solutions
*/

// Long Solution
const invertHash = hash =>
  Object.entries(hash).reduce((invertedHash, [key, value]) => ({ ...invertedHash, [value]: key }), {})

// Ramda / Lodash Solution
/*
const { invertObj: invertHash } = require('ramda')
const invertHash = require('lodash/invert')
*/

// Function Export
module.exports = invertHash
