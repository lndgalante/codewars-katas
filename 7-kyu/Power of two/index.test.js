const isPowerOfTwo = require('.')

test('Test 1', () => {
  expect(isPowerOfTwo(2)).toBeTrue()
})

test('Test 2', () => {
  expect(isPowerOfTwo(4096)).toBeTrue()
})

test('Test 3', () => {
  expect(isPowerOfTwo(5)).toBeFalse()
})

test('Test 4', () => {
  expect(isPowerOfTwo(1024)).toBeTrue()
})

test('Test 5', () => {
  expect(isPowerOfTwo(333)).toBeFalse()
})
