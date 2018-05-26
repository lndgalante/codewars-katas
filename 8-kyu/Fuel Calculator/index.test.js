const fuelPrice = require('.')

test('Test 1', () => {
  expect(fuelPrice(5, 1.23)).toBe(5.65)
})

test('Test 2', () => {
  expect(fuelPrice(8, 2.5)).toBe(18.4)
})

test('Test 3', () => {
  expect(fuelPrice(5, 5.6)).toBe(27.5)
})
