const sumMix = require('.')

test('Test 1', () => {
  expect(sumMix([9, 3, '7', '3'])).toBe(22)
})

test('Test 2', () => {
  expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toBe(42)
})

test('Test 3', () => {
  expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toBe(41)
})
