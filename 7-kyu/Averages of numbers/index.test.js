const averages = require('.')

test('Test 1', () => {
  expect(averages([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2])
})

test('Test 2', () => {
  expect(averages([2, -2, 2, -2, 2])).toEqual([0, 0, 0, 0])
})

test('Test 3', () => {
  expect(averages([1, 3, 5, 1, -10])).toEqual([2, 4, 3, -4.5])
})
