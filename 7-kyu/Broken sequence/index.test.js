const findMissingNumber = require('.')

test('Test 1', () => {
  expect(findMissingNumber('1 2 3 5')).toBe(4)
})

test('Test 2', () => {
  expect(findMissingNumber('1 3')).toBe(2)
})

test('Test 3', () => {
  expect(findMissingNumber('1 5')).toBe(2)
})

test('Test 4', () => {
  expect(findMissingNumber('')).toBe(0)
})

test('Test 5', () => {
  expect(findMissingNumber('1 2 3 4 5')).toBe(0)
})

test('Test 6', () => {
  expect(findMissingNumber('2 3 4 5')).toBe(1)
})

test('Test 7', () => {
  expect(findMissingNumber('2 6 4 5 3')).toBe(1)
})

test('Test 8', () => {
  expect(findMissingNumber('2 1 4 3 a')).toBe(1)
})
