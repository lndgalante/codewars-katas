const isDivisible = require('.')

test('Test 1', () => {
  expect(isDivisible(3, 3, 4)).toBeFalse()
})

test('Test 2', () => {
  expect(isDivisible(12, 3, 4)).toBeTrue()
})

test('Test 3', () => {
  expect(isDivisible(8, 3, 4)).toBeFalse()
})

test('Test 4', () => {
  expect(isDivisible(48, 3, 4)).toBeTrue()
})
