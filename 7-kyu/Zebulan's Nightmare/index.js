/* eslint no-unused-vars: 0 */

/*
  Title:
    Zebulan's Nightmare

  Description:
    Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules.
    In this kata, you are a mischevious hacker that has set out to sabatoge all his good code.

    Your job is to take PEP8 compatible function names and convert them to camelCase.

  Examples:
    zebulansNightmare('camel_case') == 'camelCase'
    zebulansNightmare('zebulans_nightmare') == 'zebulansNightmare'
    zebulansNightmare('get_string') == 'getString'
    zebulansNightmare('convert_to_uppercase') == 'convertToUppercase'
    zebulansNightmare('main') == 'main'

  Kata Link:
    https://www.codewars.com/kata/zebulans-nightmare

  Discuss Link:
    https://www.codewars.com/kata/zebulans-nightmare/discuss

  Solutions Link:
    https://www.codewars.com/kata/zebulans-nightmare/solutions
*/

// Long Solution
const zebulansNightmare = functionName =>
  functionName.replace(/_./g, ([underscore, char]) => char.toUpperCase())

// Function Export
module.exports = zebulansNightmare
