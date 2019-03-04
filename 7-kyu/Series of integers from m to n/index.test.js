const generateIntegers = require('.')

test('Test 1', () => {
  expect(generateIntegers(2, 5)).toEqual([2, 3, 4, 5])
})
