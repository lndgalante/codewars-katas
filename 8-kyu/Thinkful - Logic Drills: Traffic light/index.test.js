const updateLight = require('./index.js')

test('Test 1', () => {
  expect(updateLight('green')).toBe('yellow')
})
