const squareArea = require('.')

test('Test 1', () => {
  expect(squareArea(2)).toBe(1.62)
})

test('Test 2', () => {
  expect(squareArea(0)).toBe(0)
})

test('Test 3', () => {
  expect(squareArea(14.05)).toBe(80)
})
