const power = require('.')

test('Test 1', () => {
  expect(power(1, 701270)).toBe(1)
})

test('Test 2', () => {
  expect(power(2, 2)).toBe(4)
})

test('Test 3', () => {
  expect(power(3, 2)).toBe(9)
})

test('Test 4', () => {
  expect(power(-1, 40)).toBe(1)
})
