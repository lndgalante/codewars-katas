/*
  Title:
    Moves in squared strings (I)

  Description:
    This kata is the first of a sequence of four about "Squared Strings".

    You are given a string of n lines, each substring being n characters long: For example:

    s = "abcd\nefgh\nijkl\nmnop"

    We will study some transformations of this square of strings.

      - Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
        vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

      - Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
          hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

    or printed:

    vertical mirror   |horizontal mirror
    abcd --> dcba     |abcd --> mnop
    efgh     hgfe     |efgh     ijkl
    ijkl     lkji     |ijkl     efgh
    mnop     ponm     |mnop     abcd

    #Task:

    -  Write these two functions
    - high-order function oper(fct, s) where fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

  Examples:
    s = "abcd\nefgh\nijkl\nmnop"
    oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
    oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

  Notes:
    The form of the parameter fct in oper changes according to the language.
    You can see each form according to the language in "Sample Tests".

  Kata Link:
    https://www.codewars.com/kata/moves-in-squared-strings-i

  Discuss Link:
    https://www.codewars.com/kata/moves-in-squared-strings-i/discuss

  Solutions Link:
    https://www.codewars.com/kata/moves-in-squared-strings-i/solutions
*/

// Long Solution
/*
const vertMirror = string =>
  string
    .split('\n')
    .map(str =>
      str
        .split('')
        .reverse()
        .join('')
    )
    .join('\n')

const horMirror = string =>
  string
    .split('\n')
    .reverse()
    .join('\n')

const oper = (fct, s) => fct(s)
*/

// Short Solution
const reverseString = (string, splitBy) =>
  string
    .split(splitBy)
    .reverse()
    .join(splitBy)

const vertMirror = string =>
  string
    .split('\n')
    .map(string_ => reverseString(string_, ''))
    .join('\n')

const horMirror = string => reverseString(string, '\n')

const oper = (fct, s) => fct(s)

// Function Export
module.exports = { vertMirror, horMirror, oper }
