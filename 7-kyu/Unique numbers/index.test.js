const uniqueNumbers = require('.')

test('Test 1', () => {
  expect(uniqueNumbers([1, 1, 2, 2])).toEqual([1, 2])
})
