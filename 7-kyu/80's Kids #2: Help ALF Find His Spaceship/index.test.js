const findSpaceship = require('.')

test('Test 1', () => {
  expect(findSpaceship('X')).toEqual([0, 0])
})

test('Test 2', () => {
  expect(
    findSpaceship(`
..........
..........
..........
.......X..
..........
..........
`)
  ).toEqual([7, 2])
})

test('Test 3', () => {
  expect(
    findSpaceship(`
.......
X.......
`)
  ).toEqual([0, 0])
})
