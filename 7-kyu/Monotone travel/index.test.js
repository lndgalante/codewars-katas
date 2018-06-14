const isMonotone = require('.')

test('Test 1', () => {
  expect(isMonotone([1, 2, 3])).toBeTruthy()
})

test('Test 2', () => {
  expect(isMonotone([1, 1, 2])).toBeTruthy()
})

test('Test 3', () => {
  expect(isMonotone([1])).toBeTruthy()
})

test('Test 4', () => {
  expect(isMonotone([3, 2, 1])).toBeFalsy()
})

test('Test 5', () => {
  expect(isMonotone([3, 2, 2])).toBeFalsy()
})
