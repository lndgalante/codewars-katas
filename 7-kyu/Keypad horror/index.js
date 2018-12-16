/*
  Title:
    Keypad horror

  Description:
    Having two standards for a keypad layout is inconvenient!
    Computer keypad's layout:
    7 8 9 \n 4 5 6 \n 1 2 3 \n 0 \n

    Cell phone keypad's layout:
    1 2 3\n 4 5 6\n 7 8 9\n 0\n

    Solve the horror of unstandartized keypads by providing a function that converts computer input to a number as if it was typed by a phone.

  Examples:
    "789" -> "123"

  Notes:
    You get a string with numbers only

  Kata Link:
    https://www.codewars.com/kata/keypad-horror

  Discuss Link:
    https://www.codewars.com/kata/keypad-horror/discuss

  Solutions Link:
    https://www.codewars.com/kata/keypad-horror/solutions
*/

// Long Solution
/*
const phoneToKeypad = {
  1: 7,
  2: 8,
  3: 9,
  4: 4,
  5: 5,
  6: 6,
  7: 1,
  8: 2,
  9: 3,
  0: 0,
}

const computerToPhone = numbers => [...numbers].map(number => phoneToKeypad[number]).join('')
*/

// Short Solution
const computerToPhone = numbers => numbers.replace(/\d/g, number => '0789456123'[number])

// Function Export
module.exports = computerToPhone
