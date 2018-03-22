/*
  Title:
    Chuck Norris VII - True or False? (Beginner)

  Description:
    It's a well known fact that anything Chuck Norris wants, he gets.
    As a result Chuck very rarely has to use the word false.

    It is a less well known fact that if something is true, and Chuck doesn't want it to be,
    Chuck can scare the truth with his massive biceps, and it automatically becomes false.

    Your task is to be more like Chuck (ha! good luck!).
    You must return false without ever actually using the word false...

    Go show some truth who's boss!

  Kata Link:
    https://www.codewars.com/kata/chuck-norris-vii-true-or-false-beginner

  Discuss Link:
    https://www.codewars.com/kata/chuck-norris-vii-true-or-false-beginner/discuss

  Solutions Link:
    https://www.codewars.com/kata/chuck-norris-vii-true-or-false-beginner/solutions
*/

// Long Solution
/*
const ifChuckSaysSo = () =>
  eval(['f', 'a', 'l', 's', 'e'].reduce((str, char) => str + char, ''))
*/

// Short Solution
const ifChuckSaysSo = () => !true

// Function Export
module.exports = ifChuckSaysSo
