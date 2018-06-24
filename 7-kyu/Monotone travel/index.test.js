const isMonotone = require('.')

test('Test 1', () => {
  expect(isMonotone([1, 2, 3])).toBeTrue()
})

test('Test 2', () => {
  expect(isMonotone([1, 1, 2])).toBeTrue()
})

test('Test 3', () => {
  expect(isMonotone([1])).toBeTrue()
})

test('Test 4', () => {
  expect(isMonotone([3, 2, 1])).toBeFalse()
})

test('Test 5', () => {
  expect(isMonotone([3, 2, 2])).toBeFalse()
})
