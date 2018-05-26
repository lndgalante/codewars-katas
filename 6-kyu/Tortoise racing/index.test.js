const race = require('.')

test('Test 1', () => {
  expect(race(720, 850, 70)).toEqual([0, 32, 18])
})

test('Test 2', () => {
  expect(race(80, 91, 37)).toEqual([3, 21, 49])
})

test('Test 3', () => {
  expect(race(80, 100, 40)).toEqual([2, 0, 0])
})
