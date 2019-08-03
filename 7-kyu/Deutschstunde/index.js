/*
  Title:
    Deutschstunde

  Description:
    Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

    each noun containing less than 2 vowels has the article "das"
    each noun containing 2/3 vowels has the article "die"
    each noun containing more than 3 vowels has the article "der"

    Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!
    (This Kata is a joke, there is no such grammar rule!)

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/deutschstunde

  Discuss Link:
    https://www.codewars.com/kata/deutschstunde/discuss

  Solutions Link:
    https://www.codewars.com/kata/deutschstunde/solutions
*/

// Long Solution
/*
const derDieDas = wort => {
  const totalVowels = [...wort].reduce((total, vowel) => (/[aeiouäöü]/gi.test(vowel) ? total + 1 : total), 0)

  if (totalVowels < 2) return `das ${wort}`
  if (totalVowels === 2 || totalVowels === 3) return `die ${wort}`
  if (totalVowels > 3) return `der ${wort}`
}
*/

// Short Solution
const derDieDas = wort => {
  const totalVowels = (wort.match(/[aeiouäöü]/gi) || []).length

  if (totalVowels < 2) return `das ${wort}`
  if (totalVowels > 3) return `der ${wort}`
  return `die ${wort}`
}

// Function Export
module.exports = derDieDas
