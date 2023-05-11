const quadratic = require('.')

test('Test 1', () => {
  expect(quadratic(0, 1)).toEqual([1, -1, 0])
})

test('Test 2', () => {
  expect(quadratic(1, 1)).toEqual([1, -2, 1])
})

test('Test 3', () => {
  expect(quadratic(-4, -9)).toEqual([1, 13, 36])
})

test('Test 4', () => {
  expect(quadratic(-5, -4)).toEqual([1, 9, 20])
})

test('Test 5', () => {
  expect(quadratic(4, -9)).toEqual([1, 5, -36])
})

test('Test 6', () => {
  expect(quadratic(5, -4)).toEqual([1, -1, -20])
})
