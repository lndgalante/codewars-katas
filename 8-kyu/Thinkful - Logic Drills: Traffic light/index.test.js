const updateLight = require('.')

test('Test 1', () => {
  expect(updateLight('green')).toBe('yellow')
})
