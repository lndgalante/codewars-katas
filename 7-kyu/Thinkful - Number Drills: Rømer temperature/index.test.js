const celsiusToRomer = require('.')

test('Test 1', () => {
  expect(celsiusToRomer(24)).toBe(20.1)
})

test('Test 2', () => {
  expect(celsiusToRomer(8)).toBe(11.7)
})

test('Test 3', () => {
  expect(celsiusToRomer(29)).toBe(22.725)
})
