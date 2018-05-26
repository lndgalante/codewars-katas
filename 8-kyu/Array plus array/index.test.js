const arrayPlusArray = require('.')

test('Test 1', () => {
  expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21)
})

test('Test 2', () => {
  expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21)
})

test('Test 3', () => {
  expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15)
})

test('Test 4', () => {
  expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100)
})
