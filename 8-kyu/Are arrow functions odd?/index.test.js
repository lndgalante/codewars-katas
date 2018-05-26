const odds = require('.')

test('Test 1', () => {
  expect(odds([])).toEqual([])
})

test('Test 2', () => {
  expect(odds([2, 4, 6])).toEqual([])
})

test('Test 3', () => {
  expect(odds([1, 3, 5])).toEqual([1, 3, 5])
})

test('Test 4', () => {
  expect(odds([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5])
})
