const reverseInvert = require('.')

test('Test 1', () => {
  expect(reverseInvert([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5])
})

test('Test 2', () => {
  expect(reverseInvert([-10])).toEqual([1])
})

test('Test 3', () => {
  expect(reverseInvert([-9, -18, 99])).toEqual([9, 81, -99])
})

test('Test 4', () => {
  expect(reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6])).toEqual([-1, -21, -78, 24, -5])
})

test('Test 5', () => {
  expect(reverseInvert([])).toEqual([])
})
