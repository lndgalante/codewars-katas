const dropCap = require('.')

test('Test 1', () => {
  expect(dropCap('Apple Banana')).toBe('Apple Banana')
})
