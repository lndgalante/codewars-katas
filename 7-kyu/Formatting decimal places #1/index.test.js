const twoDecimalPlaces = require('.')

test('Test 1', () => {
  expect(twoDecimalPlaces(10.1289767789)).toBe(10.12)
})

test('Test 2', () => {
  expect(twoDecimalPlaces(-7488.83485834983)).toBe(-7488.83)
})

test('Test 3', () => {
  expect(twoDecimalPlaces(4.653725356)).toBe(4.65)
})
