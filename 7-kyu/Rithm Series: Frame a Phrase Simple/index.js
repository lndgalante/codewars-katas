/*
  Title:
    Rithm Series: Frame a Phrase Simple

  Description:
    Carpe Diem! Yolo! On Fleek? Crushing it.  You've got some awesome phrases that you want to hang up on your wall.
    The problem is that you don't have any frames laying around.  So instead, you decide to write a program to create your frame.

    Write a function called frame that will take two parameters as input: a phrase and optionally a character for the border of the frame.

    frame("Yolo", '@');

    Returns:

    @@@@@@@@
    @      @
    @ Yolo @
    @      @
    @@@@@@@@

    Notice that the framed phrase has a single space to the left and to the right.
    Also, there is an empty line both above and below the phrase.

    If a second parameter is not given, assume the frame should be decorated using the * character.

    You can assume that all phrases are a single line (no new line characters), and that the second parameter to the function (the frame character) is always a single character.

    If an empty string is passed in, return an emtpy frame.  For example:
    frame("");

    returns:
    ****
    *  *
    *  *
    ****

  Kata Link:
    https://www.codewars.com/kata/5867d76b36959fa4a400034e

  Discuss Link:
    https://www.codewars.com/kata/5867d76b36959fa4a400034e/discuss

  Solutions Link:
    https://www.codewars.com/kata/5867d76b36959fa4a400034e/solutions
*/

// Long Solution
function frame(phrase, ch = '*') {
  const phraseWithSpaces = ` ${phrase} `
  const middleRows = phraseWithSpaces.replace(/./g, ' ')

  const topBottomRow = phraseWithSpaces.replace(/./g, ch)
  const middlePhrase = phrase ? `\n${ch}${phraseWithSpaces}${ch}` : ''

  const result = `${ch}${topBottomRow}${ch}
${ch}${middleRows}${ch}${middlePhrase}
${ch}${middleRows}${ch}
${ch}${topBottomRow}${ch}`

  return result
}

// Function Export
module.exports = frame
