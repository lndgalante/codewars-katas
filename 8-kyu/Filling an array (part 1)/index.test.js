const arr = require('.')

test('Test 1', () => {
  expect(arr()).toBeArray()
})

test('Test 2', () => {
  expect(arr()).toEqual([])
})

test('Test 3', () => {
  expect(arr(4)).toEqual([0, 1, 2, 3])
})
