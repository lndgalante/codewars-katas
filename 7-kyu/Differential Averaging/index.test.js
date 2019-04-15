const addToAverage = require('.')

test('Test 1', () => {
  expect(addToAverage(0, 0, 1)).toBe(1)
})

test('Test 2', () => {
  expect(addToAverage(1, 1, 2)).toBe(1.5)
})

test('Test 3', () => {
  expect(addToAverage(1.5, 2, 3)).toBe(2)
})

test('Test 4', () => {
  expect(addToAverage(0, 0, 123)).toBe(123)
})

test('Test 5', () => {
  expect(addToAverage(123, 1, 456)).toBe(289.5)
})

test('Test 6', () => {
  expect(addToAverage(289.5, 2, 789)).toBe(456)
})
