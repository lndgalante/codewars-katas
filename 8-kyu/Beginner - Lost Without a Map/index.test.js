const maps = require('.')

test('Test 1', () => {
  expect(maps([1, 2, 3])).toEqual([2, 4, 6])
})

test('Test 2', () => {
  expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8])
})

test('Test 3', () => {
  expect(maps([2, 2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4, 4])
})
