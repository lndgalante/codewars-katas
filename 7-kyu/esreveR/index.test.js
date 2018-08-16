const reverse = require('.')

test('Test 1', () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
})

test('Test 2', () => {
  expect(reverse([1, null, 14, 'two'])).toEqual(['two', 14, null, 1])
})
