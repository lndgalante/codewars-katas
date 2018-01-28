/*
  Title:
    DNA to RNA Conversion

  Description:
    Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
    It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

    Ribonucleic acid, RNA, is the primary messenger molecule in cells.
    RNA differs slightly from DNA its chemical structure and contains no Thymine.
    In RNA Thymine is replaced by another nucleic acid Uracil ('U').

    Create a funciton which translates a given DNA string into RNA.

  Examples:
    DNAtoRNA("GCAT")
      // returns ("GCAU")

  Kata Link:
    https://www.codewars.com/kata/dna-to-rna-conversion

  Discuss Link:
    https://www.codewars.com/kata/dna-to-rna-conversion/discuss

  Solutions Link:
    https://www.codewars.com/kata/dna-to-rna-conversion/solutions
*/

// Long Solution
const dnaToRna = dna => dna.replace(/t/gi, 'U')

// Function Export
module.exports = dnaToRna
