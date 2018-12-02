/*
  Title:
    Coding 3min: Bug in Apple

  Description:
    Find out "B"(Bug) in a lot of "A"(Apple).

    There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

    input: string Array ```apple```

    output: Location of "B", ```[x,y]```

  Kata Link:
    https://www.codewars.com/kata/coding-3min-bug-in-apple

  Discuss Link:
    https://www.codewars.com/kata/coding-3min-bug-in-apple/discuss

  Solutions Link:
    https://www.codewars.com/kata/coding-3min-bug-in-apple/solutions
*/

// Long Solution
/* const sc = apple =>
  apple.reduce((coordinates, row, xCoordinate) => {
    const rowWithB = row.includes('B')

    if (rowWithB) {
      const yCoordinate = row.indexOf('B')
      return [xCoordinate, yCoordinate]
    }

    return coordinates
  }, []) */

// Short Solution
const sc = apple => {
  const xCoordinate = apple.findIndex(row => row.includes('B'))
  const yCoordinate = apple[xCoordinate].indexOf('B')

  return [xCoordinate, yCoordinate]
}

// Function Export
module.exports = sc
