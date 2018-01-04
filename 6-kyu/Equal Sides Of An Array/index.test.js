const findEvenIndex = require('./index.js')

test('Test 1', () => {
  expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3)
})

test('Test 2', () => {
  expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1)
})

test('Test 3', () => {
  expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1)
})

test('Test 4', () => {
  expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3)
})
