const numberToPower = require('.')

test('Test 1', () => {
  expect(numberToPower(4, 2)).toBe(16)
})

test('Test 2', () => {
  expect(numberToPower(10, 4)).toBe(10000)
})

test('Test 3', () => {
  expect(numberToPower(10, 0)).toBe(1)
})
