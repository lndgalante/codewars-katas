/*
  Title:
    Make every letter after X into caps.

  Description:
    Imagine a book author has hired us to create a function that takes his book as a string as input and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 'x' into a capital letter.

    For example.
    makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')

    Should return:
    "and lArry walKed into the park lAte to chase a squirrel"
    If the letter after x is already in caps it should stay in caps.

  Kata Link:
    https://www.codewars.com/kata/make-every-letter-after-x-into-caps

  Discuss Link:
    https://www.codewars.com/kata/make-every-letter-after-x-into-caps/discuss

  Solutions Link:
    https://www.codewars.com/kata/make-every-letter-after-x-into-caps/solutions
*/

// Long Solution
/*
const makeEveryLetterAfterXCaps = (str, letter) =>
  str
    .split('')
    .map((char, index, array) => (array[index - 1] === letter ? char.toUpperCase() : char))
    .join('')
*/

// Short Solution
const makeEveryLetterAfterXCaps = (string, letter) =>
  string.replace(new RegExp(`${letter}.`, 'g'), ([firstChar, secondChar]) => `${firstChar}${secondChar.toUpperCase()}`)

// Function Export
module.exports = makeEveryLetterAfterXCaps
