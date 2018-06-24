const xor = require('.')

test('Test 1', () => {
  expect(xor(false, false)).toBeFalse()
})

test('Test 2', () => {
  expect(xor(true, false)).toBeTrue()
})

test('Test 3', () => {
  expect(xor(false, true)).toBeTrue()
})

test('Test 4', () => {
  expect(xor(true, true)).toBeFalse()
})

test('Test 5', () => {
  expect(!xor(true, true)).toBeTrue()
})
