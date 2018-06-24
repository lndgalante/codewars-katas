const isDivisible = require('.')

test('Test 1', () => {
  expect(isDivisible(4050, 27)).toBeTrue()
})

test('Test 2', () => {
  expect(isDivisible(4066, 27)).toBeFalse()
})

test('Test 3', () => {
  expect(isDivisible(10000, 20)).toBeTrue()
})

test('Test 4', () => {
  expect(isDivisible(10005, 20)).toBeFalse()
})

test('Test 5', () => {
  expect(isDivisible(10005, 1)).toBeTrue()
})
