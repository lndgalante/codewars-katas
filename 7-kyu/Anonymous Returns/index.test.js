const alpha = require('.')

test('Test 1', () => {
  expect(alpha.getNameFunc()()).toBe('My Alpha')
})
