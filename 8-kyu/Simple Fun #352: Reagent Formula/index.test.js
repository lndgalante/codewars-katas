const isValid = require('.')

test('Test 1', () => {
  expect(isValid([1, 3, 7])).toBeTrue()
})

test('Test 2', () => {
  expect(isValid([7, 1, 2, 3])).toBeFalse()
})

test('Test 3', () => {
  expect(isValid([1, 3, 5, 7])).toBeFalse()
})

test('Test 4', () => {
  expect(isValid([1, 5, 6, 7, 3])).toBeTrue()
})

test('Test 5', () => {
  expect(isValid([5, 6, 7])).toBeTrue()
})

test('Test 6', () => {
  expect(isValid([5, 6, 7, 8])).toBeTrue()
})

test('Test 7', () => {
  expect(isValid([6, 7, 8])).toBeFalse()
})

test('Test 8', () => {
  expect(isValid([7, 8])).toBeTrue()
})
