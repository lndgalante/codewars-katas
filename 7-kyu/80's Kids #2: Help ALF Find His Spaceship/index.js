/*
  Title:
    80's Kids #2: Help ALF Find His Spaceship

  Description:
    Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac.
    Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.
    ALF has the technology to bring the spaceship home if he can lock on to its location.

    Given a map:
    ..........
    ..........
    ..........
    .......X..
    ..........
    ..........

    The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.
    In this expample:
    findSpaceship(map) => [7, 2]

    If you cannot find the spaceship, the result should be
    "Spaceship lost forever."Can you help ALF?

  Kata Link:
    https://www.codewars.com/kata/80-s-kids-number-2-help-alf-find-his-spaceship

  Discuss Link:
    https://www.codewars.com/kata/80-s-kids-number-2-help-alf-find-his-spaceship/discuss

  Solutions Link:
    https://www.codewars.com/kata/80-s-kids-number-2-help-alf-find-his-spaceship/solutions
*/

// Long Solution
const findSpaceship = (map = '') => {
  if (!map.includes('X')) return 'Spaceship lost forever.'

  const spaces = map
    .trim()
    .split(/\n/)
    .reverse()

  const y = spaces.findIndex(space => space.includes('X'))
  const x = spaces[y].indexOf('X')

  return [x, y]
}

// Function Export
module.exports = findSpaceship
