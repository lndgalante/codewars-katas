/*
  Title:
    Random case

  Description:
    Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

  Examples:
    randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

    randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"

  Notes:
    This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

  Kata Link:
    https://www.codewars.com/kata/random-case

  Discuss Link:
    https://www.codewars.com/kata/random-case/discuss

  Solutions Link:
    https://www.codewars.com/kata/random-case/solutions
*/

// Long Solution
/*
const randomIndex = length => Math.floor(Math.random() * length + 1)

const randomCase = x =>
  x
    .split('')
    .map((char, index) => (index % randomIndex(x.length) === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join('')
*/

// Short Solution
const randomCase = x => x.replace(/\w/g, char => (Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()))

// Function Export
module.exports = randomCase
