const zeroFuel = require('./index.js')

test('Test 1', () => {
  expect(zeroFuel(50, 25, 2)).toBeTruthy()
})

test('Test 2', () => {
  expect(zeroFuel(100, 50, 1)).toBeFalsy()
})
