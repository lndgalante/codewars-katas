/*
  Title:
    Fix string case

  Description:
    In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
      - make as few changes as possible.
      - if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

  Examples:
    solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
    solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
    solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

  Kata Link:
    https://www.codewars.com/kata/fix-string-case

  Discuss Link:
    https://www.codewars.com/kata/fix-string-case/discuss

  Solutions Link:
    https://www.codewars.com/kata/fix-string-case/solutions
*/

// Long Solution
/*
const solve = s => {
  const stringSplitted = [...s]

  const lowercaseChars = stringSplitted.filter(
    char => char === char.toLowerCase()
  ).length
  const uppercaseChars = stringSplitted.filter(
    char => char === char.toUpperCase()
  ).length

  if (lowercaseChars > uppercaseChars)
    return s.replace(/[A-Z]/g, char => char.toLowerCase())

  if (uppercaseChars > lowercaseChars)
    return s.replace(/[a-z]/g, char => char.toUpperCase())

  if (uppercaseChars === lowercaseChars) return s.toLowerCase()
}
*/

// Short Solution
const solve = s =>
  (s.match(/[A-Z]/g) || []).length > (s.match(/[a-z]/g) || []).length
    ? s.toUpperCase()
    : s.toLowerCase()

// Function Export
module.exports = solve
