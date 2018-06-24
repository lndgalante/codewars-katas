const plural = require('.')

test('Test 1', () => {
  expect(plural(0)).toBeTrue()
})

test('Test 2', () => {
  expect(plural(0.5)).toBeTrue()
})

test('Test 3', () => {
  expect(plural(1)).toBeFalse()
})

test('Test 4', () => {
  expect(plural(100)).toBeTrue()
})

test('Test 5', () => {
  expect(plural(Infinity)).toBeTrue()
})
