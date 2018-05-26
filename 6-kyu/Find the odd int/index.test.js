const findOdd = require('.')

test('Test 1', () => {
  expect(
    findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
  ).toBe(5)
})

test('Test 2', () => {
  expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1)
})

test('Test 3', () => {
  expect(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toBe(5)
})

test('Test 4', () => {
  expect(findOdd([10])).toBe(10)
})

test('Test 5', () => {
  expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10)
})

test('Test 6', () => {
  expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toBe(1)
})
