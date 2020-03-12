/*
  Title:
    Convert string to camel case

  Description:
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

  Examples:
    toCamelCase("the-stealth-warrior")
    // returns "theStealthWarrior"

    toCamelCase("The_Stealth_Warrior")
    // returns "TheStealthWarrior"

  Kata Link:
    https://www.codewars.com/kata/convert-string-to-camel-case

  Discuss Link:
    https://www.codewars.com/kata/convert-string-to-camel-case/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-string-to-camel-case/solutions
*/

// Long solution
/*
function toCamelCase(string) {
  const newString = string.split(/[-_]/g)

  if (newString[0].charAt(0) !== newString[0].charAt(0).toUpperCase()) {
    const result = newString
      .slice(1)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))

    return [newString[0], ...result].join('')
  } else {
    const result = newString
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    return result
  }
}
*/

// Short Solution. Regex here => https://regexr.com/3gtji
const toCamelCase = string =>
  string.replace(/[-_](.)/g, (_, char) => char.toUpperCase())

// Function Export
module.exports = toCamelCase
