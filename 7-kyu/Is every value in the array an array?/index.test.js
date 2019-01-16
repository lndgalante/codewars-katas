const arrCheck = require('.')

test('Test 1', () => {
  expect(arrCheck([])).toBeTrue()
})

test('Test 2', () => {
  expect(arrCheck([['string']])).toBeTrue()
})

test('Test 3', () => {
  expect(arrCheck([[], {}])).toBeFalse()
})

test('Test 4', () => {
  expect(arrCheck([[1], [2], [3]])).toBeTrue()
})
