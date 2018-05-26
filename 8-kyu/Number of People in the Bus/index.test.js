const number = require('.')

test('Test 1', () => {
  expect(number([[10, 0], [3, 5], [5, 8]])).toBe(5)
})

test('Test 2', () => {
  expect(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])).toBe(17)
})

test('Test 3', () => {
  expect(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])).toBe(21)
})
