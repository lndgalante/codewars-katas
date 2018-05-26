const isValid = require('.')

test('Test 1', () => {
  expect(isValid([1, 3, 7])).toBeTruthy()
})

test('Test 2', () => {
  expect(isValid([7, 1, 2, 3])).toBeFalsy()
})

test('Test 3', () => {
  expect(isValid([1, 3, 5, 7])).toBeFalsy()
})

test('Test 4', () => {
  expect(isValid([1, 5, 6, 7, 3])).toBeTruthy()
})

test('Test 5', () => {
  expect(isValid([5, 6, 7])).toBeTruthy()
})

test('Test 6', () => {
  expect(isValid([5, 6, 7, 8])).toBeTruthy()
})

test('Test 7', () => {
  expect(isValid([6, 7, 8])).toBeFalsy()
})

test('Test 8', () => {
  expect(isValid([7, 8])).toBeTruthy()
})
