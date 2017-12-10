/* 
  Title:

  Description:

  Examples:

  Notes:
  
  Link:
*/

// Long Solution
const morseDictionary = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-.-.--': '!',
  '.-.-.-': '.',
}

function decodeMorse(morseCode) {
  return morseCode
    .split('   ')
    .map(word => word.split(' ').map(char => morseDictionary[char]))
    .map(word => word.join(''))
    .join(' ')
    .trim()
}

// Function Export
module.exports = decodeMorse
