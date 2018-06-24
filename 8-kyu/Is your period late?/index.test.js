const periodIsLate = require('.')

test('Test 1', () => {
  expect(
    periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)
  ).toBeFalse()
})

test('Test 2', () => {
  expect(
    periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)
  ).toBeTrue()
})
