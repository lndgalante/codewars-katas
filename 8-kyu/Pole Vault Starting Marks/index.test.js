const startingMark = require('.')

test('Test 1', () => {
  expect(startingMark(1.52)).toBe(9.45)
})

test('Test 2', () => {
  expect(startingMark(1.83)).toBe(10.67)
})

test('Test 3', () => {
  expect(startingMark(1.22)).toBe(8.27)
})

test('Test 4', () => {
  expect(startingMark(2.13)).toBe(11.85)
})
