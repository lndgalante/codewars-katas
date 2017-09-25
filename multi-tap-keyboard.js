/*
  Description ⚔️
    Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

    ------- ------- -------
    |     | | ABC | | DEF |
    |  1  | |  2  | |  3  |
    ------- ------- -------
    ------- ------- -------
    | GHI | | JKL | | MNO |
    |  4  | |  5  | |  6  |
    ------- ------- -------
    ------- ------- -------
    |PQRS | | TUV | | WXYZ|
    |  7  | |  8  | |  9  |
    ------- ------- -------
    ------- ------- -------
    |     | |space| |     |
    |  *  | |  0  | |  #  |
    ------- ------- -------
    Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

    For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

    In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

    For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

    Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)
 */

// Long Solution
function presses(phrase) {
  const keyboard = [
    {
      key: 1,
      keys: [1],
    },
    {
      key: 2,
      keys: ['A', 'B', 'C'],
    },
    {
      key: 3,
      keys: ['D', 'E', 'F'],
    },
    {
      key: 4,
      keys: ['G', 'H', 'I'],
    },
    {
      key: 5,
      keys: ['J', 'K', 'L'],
    },
    {
      key: 6,
      keys: ['M', 'N', 'O'],
    },
    {
      key: 7,
      keys: ['P', 'Q', 'R', 'S'],
    },
    {
      key: 8,
      keys: ['T', 'U', 'V'],
    },
    {
      key: 9,
      keys: ['W', 'X', 'Y', 'Z'],
    },
    {
      key: '*',
      keys: ['*'],
    },
    {
      key: 0,
      keys: [' '],
    },
    {
      key: '#',
      keys: ['#'],
    },
  ]

  const totalKeys = []
  const phraseArray = phrase.split('')

  phraseArray.forEach(letter => {
    keyboard.forEach(key => {
      const index = key.keys.findIndex(
        char => char === letter || String(char).toLowerCase() === letter
      )

      if (index >= 0) {
        totalKeys.push(index + 1)
        return
      }
    })
  })

  const totalKeysPressed = totalKeys.reduce((acc, val) => acc + val, 0)
  return totalKeysPressed
}

// Test to pass
console.log(presses('HOLA CHUNITA')) // => It should return 9
console.log(presses('HOW R U')) // => It should return 13
