const stray = require('./index.js')

test('Test 1', () => {
  expect(stray([1, 1, 2])).toBe(2)
})
