const inAscOrder = require('.')

test('Test 1', () => {
  expect(inAscOrder([1, 2, 4, 7, 19])).toBeTrue()
})

test('Test 2', () => {
  expect(inAscOrder([1, 2, 3, 4, 5])).toBeTrue()
})

test('Test 3', () => {
  expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).toBeFalse()
})

test('Test 4', () => {
  expect(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBeFalse()
})
