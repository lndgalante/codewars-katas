const greaterThanLessThan = require('.')

test('Test 1', () => {
  expect(greaterThanLessThan(Number(null), 0, 1)).toBeTrue()
})

test('Test 2', () => {
  expect(greaterThanLessThan(700000000001, 700000000002, -1)).toBeFalse()
})

test('Test 3', () => {
  expect(greaterThanLessThan(-9, -8, 7)).toBeTrue()
})

test('Test 4', () => {
  expect(greaterThanLessThan(-9, -8, -7)).toBeFalse()
})
