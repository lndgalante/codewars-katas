/*
  Title:
    GA-DE-RY-PO-LU-KI cypher

  Description:
    The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages.
    The encryption is based on short, easy to remember key.
    The key is written as paired letters, which are in the cipher simple replacement.

    The most frequently used key is "GA-DE-RY-PO-LU-KI".
     G => A
     g => a
     a => g
     A => G
     D => E
    etc.The letters, which are not on the list of substitutes, stays in the encrypted text without changes.


    Task
    Your task is to help scouts to encrypt and decrypt thier messages.
    Write the Encode and Decode functions.

    Input/Output
    The input string consists of lowercase and uperrcase characters and white .
    The substitution has to be case-sensitive.

  Examples:
     Encode("ABCD")          // => GBCE
     Encode("Ala has a cat") // => Gug hgs g cgt
     Encode("gaderypoluki"); // => agedyropulik
     Decode("Gug hgs g cgt") // => Ala has a cat
     Decode("agedyropulik")  // => gaderypoluki
     Decode("GBCE")          // => ABCD
     encode("ABCD")          // => GBCE
     encode("Ala has a cat") // => Gug hgs g cgt
     encode("gaderypoluki"); // => agedyropulik
     decode("Gug hgs g cgt") // => Ala has a cat
     decode("agedyropulik")  // => gaderypoluki
     decode("GBCE")          // => ABCD
     encode("ABCD")          // => GBCE
     encode("Ala has a cat") // => Gug hgs g cgt
     encode("gaderypoluki"); // => agedyropulik
     decode("Gug hgs g cgt") // => Ala has a cat
     decode("agedyropulik")  // => gaderypoluki
     decode("GBCE")          // => ABCD

  Kata Link:
    https://www.codewars.com/kata/ga-de-ry-po-lu-ki-cypher

  Discuss Link:
    https://www.codewars.com/kata/ga-de-ry-po-lu-ki-cypher/discuss

  Solutions Link:
    https://www.codewars.com/kata/ga-de-ry-po-lu-ki-cypher/solutions
*/

// Long Solution
/*
 const dictionary = {
  A: 'G',
  a: 'g',
  E: 'D',
  e: 'd',
  Y: 'R',
  y: 'r',
  O: 'P',
  o: 'p',
  U: 'L',
  u: 'l',
  I: 'K',
  i: 'k',
  G: 'A',
  g: 'a',
  D: 'E',
  d: 'e',
  R: 'Y',
  r: 'y',
  P: 'O',
  p: 'o',
  L: 'U',
  l: 'u',
  K: 'I',
  k: 'i',
}

const replaceChars = str => [...str].map(char => dictionary[char] || char).join('')

const encode = str => replaceChars(str)

const decode = str => replaceChars(str)
*/

// Short Solution
const dictionary = {
  G: 'A',
  A: 'G',
  D: 'E',
  E: 'D',
  R: 'Y',
  Y: 'R',
  P: 'O',
  O: 'P',
  L: 'U',
  U: 'L',
  K: 'I',
  I: 'K',
  g: 'a',
  a: 'g',
  d: 'e',
  e: 'd',
  r: 'y',
  y: 'r',
  p: 'o',
  o: 'p',
  l: 'u',
  u: 'l',
  k: 'i',
  i: 'k',
}

const replaceChars = string => string.replace(/./g, char => dictionary[char] || char)

const encode = string => replaceChars(string)

const decode = string => replaceChars(string)

// Function Export
module.exports = { encode, decode }
