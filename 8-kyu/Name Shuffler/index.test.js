const nameShuffler = require('.')

test('Test 1', () => {
  expect(nameShuffler('john McClane')).toBe('McClane john')
})
