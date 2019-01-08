const abundantNumber = require('.')

test('Test 1', () => {
  expect(abundantNumber(18)).toBeTrue()
})

test('Test 2', () => {
  expect(abundantNumber(37)).toBeFalse()
})

test('Test 3', () => {
  expect(abundantNumber(120)).toBeTrue()
})

test('Test 4', () => {
  expect(abundantNumber(77)).toBeFalse()
})
