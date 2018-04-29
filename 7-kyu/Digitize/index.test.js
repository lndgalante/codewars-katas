const digitize = require('./index.js')

test('Test 1', () => {
  expect(digitize(123)).toEqual([1, 2, 3])
})

test('Test 2', () => {
  expect(digitize(1)).toEqual([1])
})

test('Test 3', () => {
  expect(digitize(8675309)).toEqual([8, 6, 7, 5, 3, 0, 9])
})
