const nameShuffler = require('./index.js')

test('Test 1', () => {
  expect(nameShuffler('john McClane')).toBe('McClane john')
})
