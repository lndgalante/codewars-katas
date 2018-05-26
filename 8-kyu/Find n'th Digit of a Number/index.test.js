const findDigit = require('.')

test('Test 1', () => {
  expect(findDigit(5673, 4)).toBe(5)
})

test('Test 2', () => {
  expect(findDigit(129, 2)).toBe(2)
})

test('Test 3', () => {
  expect(findDigit(-2825, 3)).toBe(8)
})

test('Test 4', () => {
  expect(findDigit(-456, 4)).toBe(0)
})

test('Test 5', () => {
  expect(findDigit(0, 20)).toBe(0)
})

test('Test 6', () => {
  expect(findDigit(65, 0)).toBe(-1)
})

test('Test 7', () => {
  expect(findDigit(24, -8)).toBe(-1)
})
