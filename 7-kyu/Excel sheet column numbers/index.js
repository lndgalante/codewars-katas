/*
  Title:
    Excel sheet column numbers

  Description:
    Write a function

    titleToNumber(title) or title_to_number(title) or titleToNb title ...

    (depending on the language)

    that given a column title as it appears in an Excel sheet,
    returns its corresponding column number. All column titles will be uppercase.

  Examples:
    titleTonumber('A') === 1
    titleTonumber('Z') === 26
    titleTonumber('AA') === 27

  Notes:
    Don't use Java Math/pow (even with bigint) because there is a loss of precision
    when the length of "title" is growing.
    Write your own function "exp [x n]".

  Kata Link:
    https://www.codewars.com/kata/excel-sheet-column-numbers

  Discuss Link:
    https://www.codewars.com/kata/excel-sheet-column-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/excel-sheet-column-numbers/solutions
*/

/*
The letters in exel are ordered like this
A B C D .... X Y Z
AA AB AC AD AE AF.... AX AY AZ
BA BB BC BD .... BX BY BZ
.
.
.
ZA ZB ZC... ZX ZY ZZ
AAA AAB AAC ... AAX AAY AAZ

Where A is the first, B the second AA the 27th etc you have to know the order of any array of letters
 */

// Long Solution
/*
const titleToNumber = title =>
  [...title].reduce(
    (result, char, index, array) => result + (char.charCodeAt(0) - 64) * 26 ** (array.length - index - 1),
    0
  )
*/

// Short Solution
const titleToNumber = title => [...title].reduce((total, char) => 26 * total + char.charCodeAt(0) - 64, 0)

// Function Export
module.exports = titleToNumber
