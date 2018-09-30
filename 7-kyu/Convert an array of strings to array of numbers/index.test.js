const toNumberArray = require('.')

test('Test 1', () => {
  expect(toNumberArray(['1.1', '2.2', '3.3'])).toEqual([1.1, 2.2, 3.3])
})
