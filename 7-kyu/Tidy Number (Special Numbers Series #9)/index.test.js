const tidyNumber = require('.')

test('Test 1', () => {
  expect(tidyNumber(12)).toBeTrue()
})

test('Test 2', () => {
  expect(tidyNumber(102)).toBeFalse()
})

test('Test 3', () => {
  expect(tidyNumber(9672)).toBeFalse()
})

test('Test 4', () => {
  expect(tidyNumber(2789)).toBeTrue()
})

test('Test 5', () => {
  expect(tidyNumber(2335)).toBeTrue()
})
