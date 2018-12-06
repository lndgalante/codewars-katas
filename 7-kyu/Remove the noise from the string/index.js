/*
  Title:
    Remove the noise from the string

  Description:
    We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.

    Your mission is to write a function which removes this noise from the message.

        Notice that noise can only be
        %$&/#·@|º\ª
        charaters, other characteres are not considered noise

  Examples:
    removeNoise("h%e&·%$·llo w&%or&$l·$%d")
    // returns hello world

  Kata Link:
    https://www.codewars.com/kata/remove-the-noise-from-the-string

  Discuss Link:
    https://www.codewars.com/kata/remove-the-noise-from-the-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-the-noise-from-the-string/solutions
*/

// Long Solution
const removeNoise = str => str.replace(/[%$&/#·@|º\\ª]/g, '')

// Function Export
module.exports = removeNoise
