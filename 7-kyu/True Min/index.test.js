const min = require('.')

test('Test 1', () => {
  expect(min(1, -2.5)).toBe(-2.5)
})

test('Test 2', () => {
  expect(min(1.5, NaN)).toBeNaN()
})

test('Test 3', () => {
  expect(min(1.5, undefined)).toBeNaN()
})

test('Test 4', () => {
  expect(min(-Infinity, Infinity)).toBe(-Infinity)
})

test('Test 5', () => {
  expect(min(null, 2.5)).toBe(0)
})
