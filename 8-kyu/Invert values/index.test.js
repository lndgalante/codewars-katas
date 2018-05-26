const invert = require('.')

test('Test 1', () => {
  expect(invert([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5])
})

test('Test 2', () => {
  expect(invert([1, -2, 3, -4, 5])).toEqual([-1, 2, -3, 4, -5])
})

test('Test 3', () => {
  expect(invert([])).toEqual([])
})

test('Test 4', () => {
  expect(invert([0])).toEqual([0])
})
