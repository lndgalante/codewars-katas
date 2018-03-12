/*
  Title:
    The Wide-Mouthed frog!

  Description:
    The wide mouth frog is particularly interested in the eating habits of other creatures.

    He just can't stop asking the creatures he encounters what they like to eat.
    But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

    When he meets the alligator, it then makes a tiny mouth.

    Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog.
    If this one is an alligator (case insensitive) return small otherwise return wide.

  Kata Link:
    https://www.codewars.com/kata/the-wide-mouthed-frog

  Discuss Link:
    https://www.codewars.com/kata/the-wide-mouthed-frog/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-wide-mouthed-frog/solutions
*/

// Long Solution
/*
const mouthSize = animal =>
  animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
*/

// Short Solution
const mouthSize = animal => (/alligator/gi.test(animal) ? 'small' : 'wide')

// Function Export
module.exports = mouthSize
