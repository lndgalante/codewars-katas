const distinct = require('.')

test('Test 1', () => {
  expect(distinct([1])).toEqual([1])
})

test('Test 2', () => {
  expect(distinct([1, 2])).toEqual([1, 2])
})

test('Test 3', () => {
  expect(distinct([1, 1, 2])).toEqual([1, 2])
})
