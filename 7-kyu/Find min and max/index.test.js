const getMinMax = require('.')

test('Test 1', () => {
  expect(getMinMax([1])).toEqual([1, 1])
})

test('Test 2', () => {
  expect(getMinMax([1, 2])).toEqual([1, 2])
})

test('Test 3', () => {
  expect(getMinMax([2, 1])).toEqual([1, 2])
})
