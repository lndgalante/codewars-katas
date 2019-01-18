const isNice = require('.')

test('Test 1', () => {
  expect(isNice([2, 10, 9, 3])).toBeTrue()
})

test('Test 2', () => {
  expect(isNice([3, 4, 5, 7])).toBeFalse()
})
