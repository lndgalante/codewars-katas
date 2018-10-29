/*
  Title:
    Unscrambled eggs

  Description:
    Unscramble the eggs.

    The string given to your function has had an "egg" inserted directly after each consonant.
    You need to return the string before it became eggcoded.

  Examples:
    unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
    //             "B---eg---in---n---er---"

  Kata Link:
    https://www.codewars.com/kata/unscrambled-eggs

  Discuss Link:
    https://www.codewars.com/kata/unscrambled-eggs/discuss

  Solutions Link:
    https://www.codewars.com/kata/unscrambled-eggs/solutions
*/

// Long Solution
/*
const unscrambleEggs = word => word.split('egg').join('')
*/

// Short Solution
const unscrambleEggs = word => word.replace(/egg/g, '')

// Function Export
module.exports = unscrambleEggs
