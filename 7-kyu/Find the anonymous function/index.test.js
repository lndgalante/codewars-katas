const findFunction = require('.')

test('Test 1', () => {
  expect(findFunction([a => a % 2 === 0, 9, 3, 1, 0], [1, 2, 3, 4])).toEqual([2, 4])
})

test('Test 2', () => {
  expect(findFunction([9, 3, a => a % 2, 1, 0], [1, 2, 3, 4])).toEqual([1, 3])
})
