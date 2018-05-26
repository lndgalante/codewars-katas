const greaterThanLessThan = require('.')

test('Test 1', () => {
  expect(greaterThanLessThan(Number(null), 0, 1)).toBeTruthy()
})

test('Test 2', () => {
  expect(greaterThanLessThan(700000000001, 700000000002, -1)).toBeFalsy()
})

test('Test 3', () => {
  expect(greaterThanLessThan(-9, -8, 7)).toBeTruthy()
})

test('Test 4', () => {
  expect(greaterThanLessThan(-9, -8, -7)).toBeFalsy()
})
