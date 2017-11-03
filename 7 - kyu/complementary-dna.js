/* 
  Title:
    Complementary DNA

  Description:
    Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

    If you want to know more http://en.wikipedia.org/wiki/DNA

    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
    You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
    DNA strand is never empty or there is no DNA at all (again, except for Haskell).

  Examples:
    DNAStrand ("ATTGC") # return "TAACG"

    DNAStrand ("GTAT") # return "CATA"

  Link:
    https://www.codewars.com/kata/complementary-dna
*/

// Long Solution
// function DNAStrand(dna) {
//   const complementaryDna = dna
//     .split('')
//     .map(string => {
//       switch (string) {
//         case 'A':
//           return 'T'
//         case 'T':
//           return 'A'
//         case 'G':
//           return 'C'
//         case 'C':
//           return 'G'
//       }
//     })
//     .join('')
//   return complementaryDna
// }

// Short Solution
const DNAStrand = dna => {
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }

  return dna
    .split('')
    .map(string => pairs[string])
    .join('')
}

// Test to pass
console.log(DNAStrand('AAAA'))
// => It should return 'TTTT'
console.log(DNAStrand('ATTGC'))
// => It should return 'TAACG'
console.log(DNAStrand('GTAT'))
// => It should return 'CATA'
