const foldTo = require('.')

test('Test 1', () => {
  expect(foldTo(384000000)).toBe(42)
})
