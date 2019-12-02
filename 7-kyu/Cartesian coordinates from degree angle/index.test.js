const coordinates = require('.')

test('Test 1', () => {
  expect(coordinates(90, 1)).toEqual([0, 1])
})
