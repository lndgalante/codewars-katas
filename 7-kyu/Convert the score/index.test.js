const scoreboard = require('.')

test('Test 1', () => {
  expect(scoreboard('The score is four nil')).toEqual([4, 0])
})

test('Test 2', () => {
  expect(scoreboard('new score: two three')).toEqual([2, 3])
})

test('Test 3', () => {
  expect(scoreboard('two two')).toEqual([2, 2])
})

test('Test 4', () => {
  expect(scoreboard('Arsenal just conceded another goal, two nil')).toEqual([2, 0])
})
