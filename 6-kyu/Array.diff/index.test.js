const arrayDiff = require('./index.js')

test('Test 1', () => {
  expect(arrayDiff([1, 2], [1])).toEqual([2])
})

test('Test 2', () => {
  expect(arrayDiff([1, 2, 2, 2, 3], [2])).toEqual([1, 3])
})
