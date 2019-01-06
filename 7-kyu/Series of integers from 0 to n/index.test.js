const generateIntegers = require('.')

test('Test 1', () => {
  expect(generateIntegers(3)).toEqual([0, 1, 2, 3])
})
