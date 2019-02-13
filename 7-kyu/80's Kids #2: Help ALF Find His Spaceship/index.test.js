const findSpaceship = require('.')

test('Test 1', () => {
  const map = `..........
..........
.......X..
..........
..........`

  expect(findSpaceship(map)).toEqual([7, 2])
})
