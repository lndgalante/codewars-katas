const roundIt = require('.')

test('Test 1', () => {
  expect(roundIt(3.45)).toBe(4)
})

test('Test 2', () => {
  expect(roundIt(34.5)).toBe(34)
})

test('Test 3', () => {
  expect(roundIt(34.56)).toBe(35)
})
