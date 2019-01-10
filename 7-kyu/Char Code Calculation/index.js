/*
  Title:
    Char Code Calculation

  Description:
    Given a string, turn each letter into its ASCII character code and join them together to create a number - let's call this number total1:
    'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

    Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
    total1 = 656667
                  ^
    total2 = 656661
                  ^

    Then return the difference between the sum of the digits in total1 and total2:
      (6 + 5 + 6 + 6 + 6 + 7)
    - (6 + 5 + 6 + 6 + 6 + 1)
    -------------------------
                           6

  Kata Link:
    https://www.codewars.com/kata/char-code-calculation

  Discuss Link:
    https://www.codewars.com/kata/char-code-calculation/discuss

  Solutions Link:
    https://www.codewars.com/kata/char-code-calculation/solutions
*/

// Long Solution
/*
const getCharCodes = str => [...str].map(char => char.charCodeAt()).join('')

const sumCharCodes = charCodes => [...charCodes].reduce((total, charCode) => total + parseInt(charCode), 0)

const calc = x => {
  const total1 = getCharCodes(x)
  const total2 = total1.replace(/7/g, '1')

  return sumCharCodes(total1) - sumCharCodes(total2)
}
*/

// Short Solution
const calc = x => (x.replace(/./g, char => char.charCodeAt()).match(/7/g) || []).length * 6

// Function Export
module.exports = calc
