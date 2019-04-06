const maxNumber = require('.')

test('Test 1', () => {
  expect(maxNumber(213)).toBe(321)
})

test('Test 2', () => {
  expect(maxNumber(7389)).toBe(9873)
})

test('Test 3', () => {
  expect(maxNumber(63792)).toBe(97632)
})

test('Test 4', () => {
  expect(maxNumber(566797)).toBe(977665)
})

test('Test 5', () => {
  expect(maxNumber(1000000)).toBe(1000000)
})
