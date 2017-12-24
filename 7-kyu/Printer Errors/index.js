/*
  Title:
    Printer Errors

  Description:
    In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

    The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

    Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

    You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

    The string has a length greater or equal to one and contains only letters from ato z.

  Examples:
    s="aaabbbbhaijjjm"
    error_printer(s) => "0/14"

    s="aaaxbbbbyyhwawiwjjjwwm"
    error_printer(s) => "8/22"

  Kata Link:
    https://www.codewars.com/kata/printer-errors

  Discuss Link:
    https://www.codewars.com/kata/printer-errors/discuss

  Solutions Link:
    https://www.codewars.com/kata/printer-errors/solutions
*/

// Long Solution
/*
function printerError(s) {
  const totalPrinted = s.length
  const colors = 'abcdefghijklm'.split('')

  const error = s
    .split('')
    .reduce((a, b) => (!colors.includes(b) ? a + 1 : a), 0)

  return `${error}/${totalPrinted}`
}
*/

// Short Solution
const printerError = s => `${s.replace(/[a-m]/gi, '').length}/${s.length}`

// Function Export
module.exports = printerError
