const zeroFuel = require('.')

test('Test 1', () => {
  expect(zeroFuel(50, 25, 2)).toBeTrue()
})

test('Test 2', () => {
  expect(zeroFuel(100, 50, 1)).toBeFalse()
})
